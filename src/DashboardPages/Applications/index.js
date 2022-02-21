import React, { useEffect, useState } from 'react';
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

  const [ddata, setDdata] = useState('');

  const handleClick = () => {
    Navigate('newapplication');
  };

  useEffect(() => {
    setDdata(data);
  }, [data]);

  console.log(ddata ? ddata.length : null);
  if (ddata === '') {
  }

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
          disabled={ddata && ddata.length > 0 ? 'disabled' : null}
        >
          + New Application
        </Button>
      </HeaderDiv>
      <AppTab data={data && data} />
    </Container>
  );
};

export default Application;
