import { Button, PageHeader } from 'antd';
import AppSuccess from 'DashboardPages/Applications/ApplicationSuccess';
import TabContainer from 'DashboardPages/Applications/Tab/styled';
import React, { useState, useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import ApplicationDetails from '../ApplicationDetails';
import ApplicationFee from '../ApplicationFee';
import DocumentsUpload from '../DocumentsUpload';
import PersonalProfile from '../PersonalProfile';

import Checkbox from 'components/Checkbox';

import { toast, ToastContainer } from 'react-toastify';

import { Formik } from 'formik';
import { formInitialValues, validationSchema, validate } from '../FormModel/formInitialValue';
import { LinkButton } from 'components/Button/styled';
import { Button as ContinueButton } from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createApplication } from 'redux/slice/applicationDataSlice';
import { useMediaQuery } from 'usehooks-ts';

import { usePaystackPayment } from 'react-paystack';

import { publicKey } from '../../../../../paystack/PaystackPublickey';
import { savePaymentHistory } from 'redux/slice/PaymentHistorySlice';
import instance from 'services/api.instance';
import { formateDate } from 'utils/formatDate';

const CustomTab = ({ children, selectedClassName, className, selected }) => (
  <Tab selectedClassName={selectedClassName} selected={selected}>
    <h4 className={className}>{children}</h4>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

const HeaderDiv = styled.div`
  display: flex;
  align-items: 'center';
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const AppTab = () => {
  const matches = useMediaQuery('(max-width: 760px)');
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let length = 3;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [amountFees, setAmountFees] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === length;
  const { data } = currentUser || {};

  const [application_reason, setApplication_reason] = useState('');

  const onSelect = (index) => setTabIndex(index);

  const toastConfig = {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const notify = (message) => toast.success(message, toastConfig);

  const previous = () => {
    setActiveStep(activeStep - 1);
    setTabIndex(activeStep - 1);
  };
  const save = () => {
    // setSuccess(true);
  };
  const continueform = () => {
    if (isLastStep) {
      setTabIndex(activeStep);
      return isLastStep;
    } else {
      setActiveStep(activeStep + 1);
      setTabIndex(activeStep + 1);
    }
  };

  useEffect(() => {
    if (tabIndex) {
      setActiveStep(tabIndex);
    }
  }, [tabIndex]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setApplication_reason(value);
  };

  const config = {
    reference: new Date().getTime(),
    name: `${data && data.first_name} ${data && data.last_name}`,
    email: data && data.email,
    amount: amountFees,
    publicKey,
  };

  const initializePayment = usePaystackPayment(config);

  const handleFormSubmit = async (values) => {
    const {
      amount,
      address,
      amount_needed,
      bank_account_number,
      bank_name,
      business_plan,
      country,
      email,
      firstname,
      funding_reason,
      id_number,
      lastname,
      means_of_identification,
      passport,
      phone,
      previous_business_details,
      previous_business_name,
      proof_of_address,
      state,
      skills_type,
      business_type,
      any_previous_business,
      skills_acquisition,
      guardian_fullname,
      guardian_email,
      guardian_phone,
      guardian_address,
    } = values;

    if (amountFees !== 0) {
      initializePayment(
        (reference) => {
          if (reference.status === 'success') {
            const date = new Date();

            const configOrder = {
              user_id: data.id,
              application_id: reference.trxref,
              payer_name: `${data && data.first_name} ${data && data.last_name}`,
              amount,
              payment_reference_no: reference.reference,
              email: data && data.email,
              payment_date: formateDate(date),
            };

            instance
              .post('application/payment', configOrder)
              .then((res) => {
                dispatch(
                  createApplication({
                    application_fees: amountFees,
                    any_previous_business,
                    address,
                    amount_needed,
                    bank_account_number,
                    bank_name,
                    business_plan,
                    country,
                    email,
                    firstname,
                    funding_reason,
                    id_number,
                    lastname,
                    means_of_identification,
                    passport,
                    phone,
                    previous_business_details,
                    previous_business_name,
                    proof_of_address,
                    state,
                    guardian_fullname,
                    guardian_email,
                    guardian_phone,
                    guardian_address,
                    application_reason: {
                      reason: application_reason,
                      name: previous_business_name ? previous_business_name : skills_acquisition,
                      type: business_type ? business_type : skills_type,
                    },
                  }),
                )
                  .unwrap()
                  .then((res) => {
                    notify(res.message);
                    console.log(res);
                    setSuccess(true);
                  })
                  .catch((err) => {
                    if (err) {
                      let error;
                      if (err.error) {
                        error = err.error;
                        setError(error);
                      } else if (err.errors) {
                        error =
                          (err.errors && err.errors.email) ||
                          err.errors.phone ||
                          err.errors.guardian_email ||
                          err.errors.guardian_phone;
                        setError(error);
                      } else {
                        console.log(err);
                      }
                    }
                  });
                dispatch(savePaymentHistory(res.data));
              })
              .catch((error) => {
                console.log(error);
              });
          }
        },
        () => {
          // console.log('close')
        },
      );
    }
  };

  if (success === true) {
    return <AppSuccess />;
  }

  console.log(error);

  return (
    <TabContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="New Applications" />
      </HeaderDiv>
      <Formik initialValues={formInitialValues} validate={validate(validationSchema)} onSubmit={handleFormSubmit}>
        {({ setFieldValue, handleSubmit, handleChange, values, errors, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Tabs className="tabs" selectedIndex={tabIndex} onSelect={onSelect}>
              <TabList className="tab_list">
                <CustomTab className="custom_typo" selected="selected">
                  Personal Profile
                </CustomTab>
                <CustomTab className="custom_typo" selected="selected">
                  Application Details
                </CustomTab>
                <CustomTab className="custom_typo" selected="selected">
                  Documents Upload
                </CustomTab>
                <CustomTab className="custom_typo" selected="selected">
                  Application Fee
                </CustomTab>
              </TabList>
              <TabPanel className="tab_panel">
                <PersonalProfile
                  onChange={handleChange}
                  value={values}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  handlePrevious={previous}
                  handleNext={continueform}
                />
              </TabPanel>
              <TabPanel>
                <ApplicationDetails
                  onChange={handleChange}
                  value={values}
                  errors={errors}
                  handleChangeInput={handleChangeInput}
                  handlePrevious={previous}
                  setFieldValue={setFieldValue}
                  handleSave={save}
                  handleNext={continueform}
                />
              </TabPanel>
              <TabPanel>
                <DocumentsUpload
                  onChange={handleChange}
                  value={values}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  handlePrevious={previous}
                  handleSave={save}
                  handleNext={continueform}
                />
              </TabPanel>
              <TabPanel>
                <ApplicationFee
                  onChange={handleChange}
                  value={values}
                  isValid={isValid}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  handlePrevious={previous}
                  handleSave={save}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                  }}
                >
                  <Checkbox
                    path="/docs/application-terms.pdf"
                    link=" terms & conditions"
                    label="Accept"
                    name="acceptTerms"
                    onChange={handleChange}
                    value={values.acceptTerms}
                  />
                  {!isValid && (
                    <div style={{ marginTop: 20, padding: 10, background: '#FFBABA' }} className="text-danger">
                      All the form fields are required
                    </div>
                  )}
                  {isValid && setAmountFees(values.amount)}
                </div>
                <div className="text-danger" style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
                  {error !== '' && error}
                </div>
              </TabPanel>
            </Tabs>
            <div
              className="pre_next_div"
              style={{
                width: matches ? '100%' : '80%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: tabIndex !== 0 ? 'space-between' : 'flex-end',
              }}
            >
              {tabIndex !== 0 && <Button onClick={previous}>Previous</Button>}
              <div className="flex_space_btw">
                <LinkButton onClick={save}>Save & finish later</LinkButton>
                <ContinueButton
                  onClick={continueform}
                  type={tabIndex === 3 ? 'submit' : 'button'}
                  color="primary"
                  padding="16px 36px"
                >
                  {tabIndex === 3 ? 'Pay Now' : 'Continue'}
                </ContinueButton>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </TabContainer>
  );
};

export default AppTab;
