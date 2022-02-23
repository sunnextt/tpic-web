import { Col, Row } from 'antd';
import React from 'react';
import NavContainer, { Li, NavDiv, Ul, Img, SocialDiv } from './styled';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';

import FooterLogo from '../../../../assets/png/letgetstarted.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavContainer>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={12} lg={12} className="footer_img">
          <Img src={FooterLogo} alt="footer logo" />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="sitemap">
            <h5 className="">Sitemap</h5>
          </div>
          <NavDiv>
            <Ul>
              <Li>
                <Link to="/">Home</Link>
              </Li>
              <Li>
                <Link to="/aboutus">About Us</Link>
              </Li>
              <Li>
                <Link to="/gallery">Gallery</Link>
              </Li>
              <Li>
                <Link to="/contactus">Contact Us</Link>
              </Li>
              <Li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Li>
            </Ul>
          </NavDiv>
          <SocialDiv>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h6>Contant with us</h6>
                <div className="social">
                  <a href="##">
                    <ImFacebook size="40" className="icon_social" color="" />
                  </a>
                  <a href="##">
                    <ImTwitter size="40" className="icon_social" color="" />
                  </a>
                  <a href="##">
                    <SiInstagram size="40" className="icon_social" color="" />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h6>Email us</h6>
                <span>info@tredkjlifters.com</span>
              </Col>
            </Row>
          </SocialDiv>
          <div className="copyright_div">
            <span className="copyright">TredKJ Lifters. @ 2022. All rights reserved</span>
            <a href="/docs/terms.pdf">Terms and Condtions</a>
          </div>
        </Col>
      </Row>
    </NavContainer>
  );
};

export default Nav;
