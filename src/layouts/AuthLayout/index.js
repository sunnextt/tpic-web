import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  height: auto;
`;

const AuthLayout = ({ children }) => {
  return (
    <>
      <Layout className="dashboard_layout">
        <AuthContainer>{children}</AuthContainer>
      </Layout>
    </>
  );
};

export default AuthLayout;
