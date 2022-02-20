import React, { useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApplicationById, getOneApplicationDocumentById } from 'redux/slice/applicationDataSlice';

const CustomTab = ({ children, selectedClassName, className, selected }) => (
  <Tab selectedClassName={selectedClassName} selected={selected}>
    <h4 className={className}>{children}</h4>
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const StatusDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [singleData, setSingleData] = useState();
  const [singleDoc, setSingleDoc] = useState();

  React.useEffect(() => {
    dispatch(getApplicationById({ id }))
      .unwrap()
      .then((res) => {
        setSingleData(res.data);
      })

      .catch((error) => {
        console.log(error);
      });

    dispatch(getOneApplicationDocumentById({ id }))
      .unwrap()
      .then((res) => {
        setSingleDoc(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, id]);

  let active = 2;
  return (
    <Container>
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="Applications" />
      </HeaderDiv>
      {singleData ? (
        <StatusDetailsContainer>
          <StatusHeading>Status</StatusHeading>
          <div className="margin_bottom">
            <StepperWrap active={active} data={singleData} />
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
                <PersonalProfile data={singleData} />
              </TabPanel>
              <TabPanel>
                <ApplicationDetails data={singleData} />
              </TabPanel>
              <TabPanel>
                <DocumentsUpload data={singleData} doc={singleDoc} />
              </TabPanel>
              <TabPanel>
                <PaymentStatus data={singleData} />
              </TabPanel>
            </Tabs>
          </TabWrapper>
        </StatusDetailsContainer>
      ) : null}
    </Container>
  );
};

export default StatusDetails;
