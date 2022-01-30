import { PageHeader } from 'antd';
import AppSuccess from 'DashboardPages/Applications/ApplicationSuccess';
import TabContainer from 'DashboardPages/Applications/Tab/styled';
import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import ApplicationDetails from '../ApplicationDetails';
import ApplicationFee from '../ApplicationFee';
import DocumentsUpload from '../DocumentsUpload';
import PersonalProfile from '../PersonalProfile';

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
  const [success, setSuccess] = useState(false);

  const handlePayNow = () => {
    setSuccess(true);
  };

  if (success) {
    return <AppSuccess />;
  }

  return (
    <TabContainer>
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="New Applications" />
      </HeaderDiv>
      <Tabs className="tabs">
        <TabList className="tab_list">
          <CustomTab className="custom_typo" selected="selected">
            Personal Profile
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            Personal Profile
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            Documents Upload
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            Application Fee
          </CustomTab>
        </TabList>
        <TabPanel className="tab_panel">
          <PersonalProfile />
        </TabPanel>
        <TabPanel>
          <ApplicationDetails />
        </TabPanel>
        <TabPanel>
          <DocumentsUpload />
        </TabPanel>
        <TabPanel>
          <ApplicationFee handlePayNow={handlePayNow} />
        </TabPanel>
      </Tabs>
    </TabContainer>
  );
};

export default AppTab;
