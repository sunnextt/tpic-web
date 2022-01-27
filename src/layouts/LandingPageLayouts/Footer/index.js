import React from 'react';
import Nav from './FooterBav';
import NewsLetter from './NewsLetter';
import FooterWrapper from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <h4>
          <NewsLetter />
        </h4>
      </div>
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
