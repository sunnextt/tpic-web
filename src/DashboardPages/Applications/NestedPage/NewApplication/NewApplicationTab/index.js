import { Button, PageHeader } from 'antd';
import AppSuccess from 'DashboardPages/Applications/ApplicationSuccess';
import TabContainer from 'DashboardPages/Applications/Tab/styled';
import React, { useState, useEffect, useCallback } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import ApplicationDetails from '../ApplicationDetails';
import ApplicationFee from '../ApplicationFee';
import DocumentsUpload from '../DocumentsUpload';
import PersonalProfile from '../PersonalProfile';

import { Formik } from 'formik';
import { formInitialValues, validationSchema, validate } from '../FormModel/formInitialValue';
import { LinkButton } from 'components/Button/styled';
import { Button as ContinueButton } from 'components/Button';
import { useDispatch } from 'react-redux';
import { createApplication, getAllApplication } from 'redux/slice/applicationDataSlice';

// Tabs === <div>
// Tablist === ul
// Tab === li
// TabPanel === <div>

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
  const dispatch = useDispatch();
  let length = 3;
  const [success, setSuccess] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === length;

  const [application_reason, setApplication_reason] = useState('');

  const onSelect = (index) => setTabIndex(index);

  const previous = () => {
    setActiveStep(activeStep - 1);
    setTabIndex(activeStep - 1);
  };
  const save = () => {
    setSuccess(true);
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

  if (success) {
    console.log('save');
  }

  useEffect(() => {
    if (tabIndex) {
      setActiveStep(tabIndex);
    }
  }, [tabIndex]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setApplication_reason(value);
  };

  const handleFormSubmit = (values, actions) => {
    console.log(values);
    const {
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
      skills_acquisition,
    } = values;

    dispatch(
      createApplication({
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
        application_reason: {
          reason: application_reason,
          name: previous_business_name ? previous_business_name : skills_acquisition,
          type: skills_type,
        },
      }),
    )
      .unwrap()
      .then((res) => {
        // setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
      });
  };

  console.log(tabIndex);

  return (
    <TabContainer>
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="New Applications" />
      </HeaderDiv>
      <Formik initialValues={formInitialValues} validate={validate(validationSchema)} onSubmit={handleFormSubmit}>
        {({ setFieldValue, handleSubmit, handleChange, values, errors }) => (
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
                  handleSave={save}
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
                  errors={errors}
                  setFieldValue={setFieldValue}
                  handlePrevious={previous}
                  handleSave={save}
                />
              </TabPanel>
            </Tabs>
            <div
              className="pre_next_div"
              style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: tabIndex !== 0 ? 'space-between' : 'flex-end'
              }}
            >
              {tabIndex !== 0 && <Button onClick={previous}>Previous</Button>}
              <div className="flex_space_btw">
                <LinkButton onClick={save}>Save & finish later</LinkButton>
                <ContinueButton onClick={continueform} type="submit" color="primary" padding="16px 36px">
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
