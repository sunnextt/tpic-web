import React, { useState } from 'react';
import HeaderContainer from './styled';
import { Drawer } from 'antd';
import BrandLogo from './BrandLogo/BrandLogo';
import Nav, { FloatingNav } from './Nav';
import AuthNav from './AuthNav';
import { useMediaQuery } from 'usehooks-ts';
import { FcMenu } from 'react-icons/fc';

const Header = () => {
  const matches = useMediaQuery('(min-width: 960px)');

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onClose = () => {
    setCollapsed(false);
  };

  return (
    <HeaderContainer>
      <BrandLogo />
      {matches ? (
        <>
          <Nav />
          <AuthNav />
        </>
      ) : (
        <>
          <AuthNav />
          {React.createElement(collapsed ? FcMenu : FcMenu, {
            className: 'trigger',
            onClick: toggle,
          })}
          <Drawer placement="right" closable onClose={onClose} visible={collapsed}>
            <FloatingNav collapsed={collapsed} />
          </Drawer>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
