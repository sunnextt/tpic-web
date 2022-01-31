import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableCard from './AllStatus.js';
import AppStatusTableCard from './AppStatusCategory/index.js';

import TabContainer from './styled';

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

const AppTab = () => {
  return (
    <TabContainer>
      <Tabs className="tabs">
        <TabList className="tab_list">
          <CustomTab className="custom_typo" selected="selected">
            All Status
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            In Review
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            Approved
          </CustomTab>
          <CustomTab className="custom_typo" selected="selected">
            Rejected
          </CustomTab>
        </TabList>
        <TabPanel className="tab_panel">
          <TableCard appStatus="incomplete" paymentStatus="pending" />
        </TabPanel>
        <TabPanel>
          <AppStatusTableCard appStatus="incomplete" paymentStatus="pending" />
        </TabPanel>
        <TabPanel>
          <AppStatusTableCard appStatus="approved" paymentStatus="successful" />
        </TabPanel>
        <TabPanel>
          <AppStatusTableCard appStatus="rejected" paymentStatus="successful" />
        </TabPanel>
      </Tabs>
    </TabContainer>
  );
};

export default AppTab;
