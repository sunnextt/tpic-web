import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { getfeesAmount } from 'utils/getFeesAmount';
import ApplicationFeeContainer, { CardDiv } from './styled';

const ApplicationFee = ({ value, setFieldValue }) => {
  const [valueAmount, setValueAmount] = useState(0);

  useEffect(() => {
    if (value) {
      if (value.acceptTerms === true) {
        setValueAmount(getfeesAmount(value.amount_needed));

        if (valueAmount !== 0) {
          setFieldValue('amount', valueAmount);
        }
      }
    }
  }, [setFieldValue, value, valueAmount]);

  useEffect(() => {
    if (valueAmount !== 0) {
      setFieldValue('amount', valueAmount);
    }
  }, [setFieldValue, value.acceptTerms, valueAmount]);

  return (
    <ApplicationFeeContainer>
      <div className="aligh_item_center">
        <CardDiv>
          <Card style={{ padding: '0 2rem' }}>
            <h5>Application Fee</h5>
            <h3>
              {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
                value ? getfeesAmount(value.amount_needed) : 0,
              )}
            </h3>
            <h6>
              The application fee allows us process your application and run background checks. The fee is
              non-refundable.
            </h6>
          </Card>
        </CardDiv>
      </div>
    </ApplicationFeeContainer>
  );
};

export default ApplicationFee;
