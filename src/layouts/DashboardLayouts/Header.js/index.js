import React from 'react';
import Avatar from 'react-avatar';
import { Layout } from 'antd';
import BrandLogo from './BrandLogo/BrandLogo';
import { AuthProfile } from './styled';
const { Header } = Layout;

const style = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  background: '#00A953',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
};

const TopHeader = () => {
  const name = 'Josh Osazuwa';
  return (
    <Header className="header" style={style}>
      <BrandLogo />
      <AuthProfile>
        <Avatar name={name} size={40} round />
        <h6>{name}</h6>
      </AuthProfile>
    </Header>
  );
};

export default TopHeader;
