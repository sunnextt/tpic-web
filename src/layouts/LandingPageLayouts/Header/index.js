import React from 'react';
import HeaderContainer from './styled';
// import { useMediaQuery } from 'usehooks-ts';
import BrandLogo from './BrandLogo/BrandLogo';
import Nav from './Nav';
import AuthNav from './AuthNav';

const Header = () => {
  return (
    <HeaderContainer>
      <BrandLogo />
      <Nav />
      <AuthNav />
    </HeaderContainer>
  );
};

export default Header;
