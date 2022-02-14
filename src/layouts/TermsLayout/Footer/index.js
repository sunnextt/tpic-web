import React from 'react';
import Nav from './FooterBav';
import FooterWrapper from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="divider">
        <hr />
      </div>
      <div>
        <Nav />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
