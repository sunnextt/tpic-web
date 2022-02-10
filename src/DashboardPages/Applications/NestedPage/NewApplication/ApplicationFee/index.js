import { Card } from 'antd';
import Checkbox from 'components/Checkbox';
import React from 'react';
import ApplicationFeeContainer, { CardDiv } from './styled';

const ApplicationFee = ({ isValid, onChange, values }) => {
  return (
    <ApplicationFeeContainer>
      <div className="aligh_item_center">
        <CardDiv>
          <Card style={{ padding: '0 2rem' }}>
            <h5>Application Fee</h5>
            <h3>N10,000</h3>
            <h6>
              The application fee allows us process your application and run background checks. The fee is
              non-refundable.
            </h6>
          </Card>
        </CardDiv>
        <Checkbox
          path="/terms"
          link=" terms & conditions"
          label="Accept"
          name="acceptTerms"
          onChange={onChange}
        />
        {!isValid && (
          <div style={{ marginTop: 20, padding: 10, background: '#FFBABA' }} className="text-danger">
            All the form fields are required
          </div>
        )}
      </div>
    </ApplicationFeeContainer>
  );
};

export default ApplicationFee;
