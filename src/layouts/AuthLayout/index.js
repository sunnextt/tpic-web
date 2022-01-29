import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const AuthLayout = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};

export default AuthLayout;
