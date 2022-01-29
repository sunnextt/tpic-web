import React from 'react';
import Container, { HeaderDiv } from './styled';
import { PageHeader } from 'antd';
import AppTab from './Tab';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const Application = () => {
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
          width="30%"
          radius="50px"
          fontSize="18px"
          lineHeight="21.6px"
          padding="16px"
          height="50px"
          onClick={handleClick}
        >
          + New Application
        </Button>
      </HeaderDiv>
      <AppTab />
    </Container>
  );
};

export default Application;
