import { Col, Row } from 'antd';
import React from 'react';
import DWSectionContainer, { Img, ImgStrip } from './styled';
import smilingLady from '../../../assets/png/smilingLady.png';
import goldenStrip from '../../../assets/png/goldenstrip.png';

const DontworriesSection = () => {
  return (
    <DWSectionContainer>
      <Row>
        <Col
          xs={24}
          sm={10}
          md={10}
          lg={10}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Img src={smilingLady} alt="smilingLady" />
        </Col>
        <Col
          xs={24}
          sm={14}
          md={14}
          lg={14}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="section_contents">
            <h4>
              Have you been tossed to and fro by the banks for a loan with unreasonable collateral demands and interest
              rates?
            </h4>
            <h4>No worries</h4>
            <h5>TREDJK LIFTERS is here for you</h5>
            <ImgStrip src={goldenStrip} alt="Img Strip" />
          </div>
        </Col>
      </Row>
    </DWSectionContainer>
  );
};

export default DontworriesSection;
