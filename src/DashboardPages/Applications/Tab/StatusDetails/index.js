import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { BiError } from 'react-icons/bi';
import 'react-tabs/style/react-tabs.css';
import ApplicationDetails from './ApplicationDetails';
import PersonalProfile from './PersonalProfile';
import DocumentsUpload from './DocumentsUpload';
import StepperWrap from './stepper';
import StatusDetailsContainer, { StatusHeading, TabWrapper } from './styled';
import PaymentStatus from './PaymentStatus';
import { PageHeader } from 'antd';
import Container, { HeaderDiv } from 'DashboardPages/Applications/styled';

const CustomTab = ({ children, selectedClassName, className, selected }) => (
  <Tab selectedClassName={selectedClassName} selected={selected}>
    <h4 className={className}>{children}</h4>
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const StatusDetails = () => {
  let active = 2;
  return (
    <Container>
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="Applications" />
      </HeaderDiv>
      <StatusDetailsContainer>
        <StatusHeading>Status</StatusHeading>
        <div className="margin_bottom">
          <StepperWrap active={active} />
        </div>
        <TabWrapper>
          <Tabs className="tabs">
            <TabList className="tab_list">
              <CustomTab className="custom_typo" selected="selected">
                Personal Profile
              </CustomTab>
              <CustomTab className="custom_typo" selected="selected">
                Application Details
              </CustomTab>
              <CustomTab className="custom_typo" selected="selected">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <span> Documents Upload </span>
                  <BiError size="26" color="#FF2E00" />
                </div>
              </CustomTab>
              <CustomTab className="custom_typo" selected="selected">
                Payment Status
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
              <PaymentStatus />
            </TabPanel>
          </Tabs>
        </TabWrapper>
      </StatusDetailsContainer>
    </Container>
  );
};

export default StatusDetails;
