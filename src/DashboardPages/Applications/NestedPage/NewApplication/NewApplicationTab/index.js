import { Button, PageHeader, Spin } from 'antd';
import AppSuccess from 'DashboardPages/Applications/ApplicationSuccess';
import TabContainer from 'DashboardPages/Applications/Tab/styled';
import React, { useState, useEffect, useRef } from 'react';
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
import { createApplication, SaveApplicationDraft } from 'redux/slice/applicationDataSlice';
import { useMediaQuery } from 'usehooks-ts';

import { usePaystackPayment } from 'react-paystack';

import { publicKey } from '../../../../../paystack/PaystackPublickey';
import instance from 'services/api.instance';
import { formateDate } from 'utils/formatDate';
import axios from 'axios';

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

const baseURL = 'https://api.paystack.co/bank';

const AppTab = () => {
  const [banks, setBanks] = React.useState(null);
  const formRef = useRef();

  React.useEffect(() => {
    axios.get(baseURL).then(({ data }) => {
      let bdata = data.data;

      let ModifiedData = bdata.map((list) => {
        return {
          // value: list.code,
          value: list.name,
          label: list.name,
        };
      });

      setBanks(ModifiedData);
    });
  }, []);

  const matches = useMediaQuery('(max-width: 760px)');
  const { user: currentUser } = useSelector((state) => state.auth);
  const { DraftData } = useSelector((state) => state.application);

  const dispatch = useDispatch();
  let length = 3;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [amountFees, setAmountFees] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === length;
  const { data } = currentUser || {};

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
    const DraftFieldData = formRef.current.values;
    dispatch(SaveApplicationDraft({ DraftFieldData }))
      .unwrap()
      .then((res) => {
        notify(res.message);
      })
      .catch((err) => {});
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

  const config = {
    reference: new Date().getTime(),
    name: `${data && data.first_name} ${data && data.last_name}`,
    email: data && data.email,
    amount: amountFees * 100,
    publicKey,
  };

  const initializePayment = usePaystackPayment(config);

  const handleFormSubmit = async (values, actions) => {
    setError('');
    actions.setSubmitting(false);
    const {
      amount,
      reason,
      is_previous_business,
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
      application_reason,
      appResonType,
      second_means_of_identification,
    } = values;

    dispatch(
      createApplication({
        application_fees: amount,
        is_previous_business,
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
        second_means_of_identification,
        application_reason: {
          reason: reason,
          name: previous_business_name,
          type: appResonType,
        },
      }),
    )
      .unwrap()
      .then((res) => {
        notify(res.message);
        initializePayment(
          (reference) => {
            if (reference.status === 'success') {
              setLoading(true);
              const date = new Date();
              const configOrder = {
                user_id: data.id,
                application_id: res.data.id,
                payer_name: `${data && data.first_name} ${data && data.last_name}`,
                amount,
                payment_reference_no: reference.reference,
                email: data && data.email,
                payment_date: formateDate(date),
              };

              instance
                .post('application/payment', configOrder)
                .then((res) => {
                  setSuccess(true);
                  setLoading(false);
                })
                .catch((error) => {
                  setLoading(false);
                });
            }
          },
          () => {
            // console.log('close')
          },
        );
      })
      .catch((err) => {
        setLoading(false);
        if (err) {
          // setError(err.message);
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
  };

  if (success) {
    return <AppSuccess />;
  }
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
        <PageHeader className="ant-page-header" title="New Application" />
      </HeaderDiv>
      <Formik
        enableReinitialize
        initialValues={formInitialValues(DraftData)}
        validate={validate(validationSchema)}
        onSubmit={handleFormSubmit}
        innerRef={formRef}
      >
        {({ isSubmitting, setFieldValue, handleSubmit, handleChange, values, errors, isValid }) => (
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
                  draftData={DraftData}
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
                  bankData={banks && banks}
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
                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                )}
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
                <LinkButton type="button" onClick={save}>
                  Save & finish later
                </LinkButton>
                <ContinueButton
                  onClick={continueform}
                  type={tabIndex === 3 ? 'submit' : 'button'}
                  color="primary"
                  padding="16px 36px"
                  disabled={isSubmitting}
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
