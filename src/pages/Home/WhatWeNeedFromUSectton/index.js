import { Col, Row } from 'antd';
import React from 'react';
import HomeGallery from './HomeGallery';
import WWNFYContainer from './styled';
import { BsLightbulb } from 'react-icons/bs';
import { BsEmojiSmile, BsPencilSquare } from 'react-icons/bs';
import { MdOutlineBusiness } from 'react-icons/md';
import { SiGooglemybusiness } from 'react-icons/si';
import { GiRun } from 'react-icons/gi';
import Button from 'components/Button';

const WhatWeNeedFromU = () => {
  return (
    <WWNFYContainer>
      <Row gutter={[24, 48]} style={{ justifyContent: 'space-between' }}>
        <Col xs={24} sm={24} md={11} lg={11}>
          <HomeGallery />
        </Col>
        <Col xs={24} sm={24} md={11} lg={11}>
          <div className="gallery_content">
            <div className="gallery_cont_headline">
              <h4>What we need from you</h4>
              <p>No Academic Qualifications Needed</p>
            </div>
            <div className="gallery_cont_details">
              <div className="content_icon_div">
                <BsPencilSquare size="40" className="icon_social" />
                <h6>Apply</h6>
              </div>
              <div className="content_icon_div">
                <BsEmojiSmile size="40" className="icon_social" />
                <h6>Be Honest and true with informations provided</h6>
              </div>
              <div className="content_icon_div">
                <SiGooglemybusiness size="40" className="icon_social" />
                <h6>Submit an excellent business plan</h6>
              </div>
              <div className="content_icon_div">
                <BsLightbulb size="40" className="icon_social" />
                <h6>Be very creative and skilled</h6>
              </div>
              <div className="content_icon_div">
                <MdOutlineBusiness size="40" className="icon_social" />
                <h6>Know your craft/business so well to deliver even in your dreams</h6>
              </div>
              <div className="content_icon_div">
                <GiRun size="40" className="icon_social" />
                <h6>Be ready to move</h6>
              </div>
            </div>
            <div className="content_btn_div">
              <Button width="40%" color="primary">Get Started</Button>
            </div>
          </div>
        </Col>
      </Row>
    </WWNFYContainer>
  );
};

export default WhatWeNeedFromU;
