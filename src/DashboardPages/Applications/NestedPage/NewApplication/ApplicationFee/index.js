import { Card, Button } from 'antd';
import { LinkButton } from 'components/Button/styled';
import Checkbox from 'components/Checkbox';
import React, { useState } from 'react';
import { Button as ContinueButton } from 'components/Button';
import ApplicationFeeContainer, { CardDiv } from './styled';

const ApplicationFee = ({ handlePayNow }) => {
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
      </div>
      <div className="contents_btn_div">
        <div className="pre_next_div">
          <Button>Previous</Button>
          <div className="flex_space_btw">
            <LinkButton>Save & finish later</LinkButton>
            <ContinueButton color="primary" padding="16px 36px" onClick={handlePayNow}>
              Pay Now
            </ContinueButton>
          </div>
        </div>
      </div>
    </ApplicationFeeContainer>
  );
};

export default ApplicationFee;
