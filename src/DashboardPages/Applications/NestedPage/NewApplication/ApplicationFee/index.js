import { Card, Button } from 'antd';
import { LinkButton } from 'components/Button/styled';
import Checkbox from 'components/Checkbox';
import React, { useState } from 'react';
import ApplicationFeeContainer, { CardDiv } from './styled';

const ApplicationFee = ({ handleSave, handlePrevious, errors }) => {
  console.log(errors);
  const [value, setCheckbox] = useState(true);

  return (
    <ApplicationFeeContainer>
      <div className="aligh_item_center">
        <CardDiv>
          <Card style={{ width: 500 }}>
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
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
        {errors && (
          <div style={{ marginTop: 20, padding: 10, background: '#FFBABA' }} className="text-danger">
            All the form fields are required
          </div>
        )}
      </div>
    </ApplicationFeeContainer>
  );
};

export default ApplicationFee;
