import React from 'react';
import FooterWrapper from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <div className="copyright_div" style={{ textAlign: 'center' }}>
          <span className="copyright">TredKJ Lifters. @ 2022. All rights reserved</span>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
