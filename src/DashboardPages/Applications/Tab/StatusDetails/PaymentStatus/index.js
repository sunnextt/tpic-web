import { Col, Row } from 'antd';
import { StatusButton } from 'components/Button/styled';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import PaymentStatusContainer, { ApplicationFeeDiv, FundDiv } from './styled';

const PaymentStatus = ({ data }) => {
  const matches = useMediaQuery('(max-width: 760px)');

  console.log(data);

  return (
    <PaymentStatusContainer>
      <Row>
        <Col xs={24} sm={24} md={11} lg={11}>
          <ApplicationFeeDiv>
            <h6 className="header">Application Fee</h6>
            <h4 className="fee_amount">
              ₦{new Intl.NumberFormat().format(data.application_fees === null ? 0 : data.application_fees)}
            </h4>
            <h6 className="fee_content">
              The application fee allows us process your application and run background checks. The fee is
              non-refundable.
            </h6>
            <StatusButton color="pending">Pending</StatusButton>
          </ApplicationFeeDiv>
        </Col>
        {!matches && (
          <Col xs={24} sm={1} md={1} lg={1}>
            <div className="divider" />
          </Col>
        )}
        <Col xs={24} sm={24} md={11} lg={11}>
          <FundDiv>
            <h6 className="header">Funds Requested</h6>
            <h4 className="fee_amount">
              ₦{new Intl.NumberFormat().format(data.amount_needed === null ? 0 : data.amount_needed)}
            </h4>
            <div>
              <span className="fee_content">
                If approved, disbursment takes between 2 to 5 working days. If by then you havnt recieved your funds.{' '}
                <a href="/contactus">contact us</a>
              </span>
            </div>
            <StatusButton color="success">Pending</StatusButton>
          </FundDiv>
        </Col>
      </Row>
    </PaymentStatusContainer>
  );
};

export default PaymentStatus;
