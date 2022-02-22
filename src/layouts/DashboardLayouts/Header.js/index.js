import React from 'react';
import Avatar from 'react-avatar';
import { Layout } from 'antd';
import BrandLogo from './BrandLogo/BrandLogo';
import { AuthProfile } from './styled';
import { useSelector } from 'react-redux';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

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

const TopHeader = ({ collapsed, toggle, Breakpoint }) => {
  const { userProfile } = useSelector((state) => state.application);
  const { data: profileData } = userProfile;

  return (
    <Header className="header" style={style}>
      {Breakpoint ? (
        <>
          {React.createElement(collapsed ? AiOutlineMenuFold : AiOutlineMenuUnfold, {
            className: 'trigger',
            onClick: toggle,
          })}
        </>
      ) : null}
      <BrandLogo />
      {profileData ? (
        <AuthProfile>
          <Avatar
            name={`${profileData && profileData.first_name} ${profileData && profileData.last_name}`}
            size={40}
            round
          />
          <h6>{`${profileData && profileData.first_name} ${profileData && profileData.last_name}`}</h6>
        </AuthProfile>
      ) : null}
    </Header>
  );
};

export default TopHeader;
