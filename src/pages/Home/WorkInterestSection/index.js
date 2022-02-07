import { Col, Row } from 'antd';
import React from 'react';
import Container, { DivTitle, DivContents } from './styled';
import { BsFillCircleFill } from 'react-icons/bs';

const WorkInterestPage = () => {
  return (
    <Container>
      <DivTitle>
        <h4>
          Tired of loans with huge interest?
          <br /> Look no further
        </h4>
        <h6>Do you need fund for your business or aquire a skill? TredKJ are here for you:</h6>
      </DivTitle>

      <DivContents>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Startups Businesses</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Expansion</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Acquisition Learning</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Side Business for Job Owners</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#FFB400" />
              </div>
              <div className="contents_div">
                <h6>Multiple Income Stream Avenues</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="col_contents">
              <div className="icon_div">
                <BsFillCircleFill size="36" color="#00A953" />
              </div>
              <div className="contents_div">
                <h6>Tech Gurus</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
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
