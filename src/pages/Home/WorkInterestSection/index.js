import { Col, Row } from 'antd';
import React from 'react';
import Container, { DivTitle, DivContents } from './styled';
import { BsFillCircleFill } from 'react-icons/bs';

const WorkInterestPage = () => {
  return (
    <Container id="about_us">
      <DivTitle className="animate__animated animate__bounce">
        <h4>
          Tired of loans with huge interest?
          <br /> Look no further
        </h4>
        <h6>Do you need fund for your business or aquire a skill? TredKJ are here for you:</h6>
      </DivTitle>

      <DivContents>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInLeft" style={{ alignSelf: 'flex-start' }}>
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Startups Businesses</h6>
                <p>Your every step counts; let’s get started already. Apply!</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInRight ">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Expansion</h6>
                <p>Growth is inevitable, grow right,grow with time and keep growing. Apply!</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInLeft">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Acquisition Learning</h6>
                <p>
                  All knowledge is valid, more valid is the Skill acquired; the power and control handed to you. Apply!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInRight">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Side Business for Job Owners</h6>
                <p>One job is never enough. Refused to be in the box. Be the Boss. Apply!</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInLeft">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Multiple Income Stream Avenues</h6>
                <p>Life should never take you unaware, be equipped with streams of income. Every penny counts.Apply!</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents animate__animated animate__fadeInRight">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Tech Gurus</h6>
                <p>
                  Technology is the new world order. What are you waiting for to apply and take the world like a storm.
                  Apply!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </DivContents>
    </Container>
  );
};

export default WorkInterestPage;
