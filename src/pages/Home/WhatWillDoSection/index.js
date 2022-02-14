import React from 'react';
import WWDContainer, { ButtonText, EcllipseImg1, EcllipseImg2, FrameImg } from './styled';
import { BsArrowRight } from 'react-icons/bs';
import { Col, Row } from 'antd';
import Ecllipseone from 'assets/png/Ellipse1.png';
import Ecllipsetwo from 'assets/png/Ellipse2.png';
import Frame from 'assets/png/Frame.png';

const WhatWillDo = () => {
  return (
    <WWDContainer>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="content_one animate__animated animate__fadeInDown">
            <h4>We provide you with your first step-needs to entrepreneurship </h4>
            <h6>
              We are all about growth, support, entrepreneurship, smart working, impact on both local and global level,
              economic empowerment, Consistency, independence, taking charge of your own life and time, being
              deliberately intentional in the evolving world of today, we create, we lift, we build, we solve.
            </h6>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="content_two animate__animated animate__fadeInDown">
            <h4>
              <FrameImg src={Frame} alt="frame" />
              We are solutions
            </h4>
            <h6>
              The world is looking for solution givers.
              <br /> Be part of It now or live to serve others. Take control of your time and life with what you have
              got, your skills and inborn gift and abilities. You are more than enough, smart, Skilled, intelligent,
              capable and entrepreneur Ing
            </h6>
            <ButtonText>
              Lets Get Started <BsArrowRight size="26" color="#00A953" />
            </ButtonText>
            <EcllipseImg1 src={Ecllipseone} alt="ellipse" />
            <EcllipseImg2 src={Ecllipsetwo} alt="ellipse" />
          </div>
        </Col>
      </Row>
    </WWDContainer>
  );
};

export default WhatWillDo;
