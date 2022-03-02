import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableCard from './AllStatus.js';
import AppStatusTableCard from './AppStatusCategory/index.js';

import TabContainer from './styled';

const CustomTab = ({ children, selectedClassName, className, selected }) => (
  <Tab selectedClassName={selectedClassName} selected={selected}>
    <h4 className={className}>{children}</h4>
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const AppTab = ({ data }) => {
  const [review, setReview] = useState('');
  const [rejected, setRejected] = useState('');
  const [approved, setApproved] = useState('');

  useEffect(() => {
    if (data) {
      const dataReview = data.filter((data) => data.application_status === 'In Review');
      const dataRejected = data.filter((data) => data.application_status === 'Rejected');
      const dataApproved = data.filter((data) => data.application_status === 'Approved');
      setReview(dataReview);
      setRejected(dataRejected);
      setApproved(dataApproved);
    }
  }, [data]);


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
        <TabPanel className="tab_panel" style={{ overflow: 'auto' }}>
          <TableCard  data={data} />
        </TabPanel>
        <TabPanel style={{ overflow: 'auto' }}>
          <AppStatusTableCard  data={review} />
        </TabPanel>
        <TabPanel style={{ overflow: 'auto' }}>
          <AppStatusTableCard  data={rejected} />
        </TabPanel>
        <TabPanel style={{ overflow: 'auto' }}>
          <AppStatusTableCard  data={approved} />
        </TabPanel>
      </Tabs>
    </TabContainer>
  );
};

export default AppTab;
