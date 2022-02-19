import React from 'react';
import Container, { HeaderDiv } from './styled';
import { PageHeader } from 'antd';
import AppTab from './Tab';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Application = () => {
  const {
    userAllapplication: { data },
  } = useSelector((state) => state.application);

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate('newapplication');
  };

  return (
    <Container>
      <HeaderDiv>
        <PageHeader className="ant-page-header" title="Applications" />
        <Button
          color="primary"
          radius="50px"
          fontSize="18px"
          lineHeight="21.6px"
          padding="16px 26px"
          height="50px"
          onClick={handleClick}
        >
          + New Application
        </Button>
      </HeaderDiv>
      <AppTab data={data && data} />
    </Container>
  );
};

export default Application;
