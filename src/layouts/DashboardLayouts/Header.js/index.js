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
  const { user: currentUser } = useSelector((state) => state.auth);
  const { data } = currentUser || {};

  const username = `${data && data.first_name} ${data && data.last_name}`;

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
      <AuthProfile>
        <Avatar name={username} size={40} round />
        <h6>{username}</h6>
      </AuthProfile>
    </Header>
  );
};

export default TopHeader;
