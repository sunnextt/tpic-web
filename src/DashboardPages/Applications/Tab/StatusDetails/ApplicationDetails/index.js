import React, { useState } from 'react';
import { Radio } from 'antd';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import AppDetailsContainer from './styled';

const ApplicationDetails = ({ data }) => {
  const [index, setIndex] = useState('');

  const handleindex = (e) => {
    setIndex(e.target.value);
  };

  return (
    <AppDetailsContainer>
      <div className="styled_form">
        <div className="application_reason">
          <Radio.Group name="reason" onChange={handleindex} value={index} defaultValue={data.application_reason}>
            <Radio value="Business Venture">Business Venture</Radio>
            <Radio value="Skills Aquisition">Skills Aquisition</Radio>
          </Radio.Group>
        </div>
        <InputDiv>
          {index === 'Business Venture' ? (
            <InputLabel>
              <Label>Business Name</Label>
              <Input name="business_name" type="text" defaultValue={data.business.business_name} />
            </InputLabel>
          ) : (
            <InputLabel>
              <Label>Business Aquisition</Label>
              <Input name="business_name" type="text" defaultValue={data.skill && data.skill.business_name} />
            </InputLabel>
          )}
          <InputLabel>
            <Label>Amount Needed</Label>
            <Input name="amount_needed" type="text" defaultValue={data.amount_needed} />
          </InputLabel>
          {index === 'Business Venture' ? (
            <InputLabel>
              <Label>Business Type</Label>
              <Input name="business_type" type="text" defaultValue={data.business.business_type} />
            </InputLabel>
          ) : index === 'Skills Aquisition' ? (
            <InputLabel>
              <Label>Skills Type</Label>
              <Input name="Skills_type" type="text" defaultValue={data.skill && data.skill} />
            </InputLabel>
          ) : null}

          <InputLabel>
            <Label>Bank Account</Label>
            <Input name="bank_account" type="text" defaultValue={data.bank_account_number} />
          </InputLabel>
          <InputLabel>
            <Label>Have you been in any business before now?</Label>
            <Input name="previous_business_name" type="text" defaultValue={data.previous_business_name} />
          </InputLabel>
          <InputLabel>
            <Label>Bank Name</Label>
            <Input name="bank_name" type="text" defaultValue={data.bank_name} />
          </InputLabel>
          <InputLabel width="fullWidth">
            <Label>If yes, please provide details</Label>
            <Input name="previous_business_name" type="text" defaultValue={data.previous_business_details} />
          </InputLabel>
          <TextAreaDiv>
            <Label>Tell us why TredKJ Lifters should fund your business</Label>
            <StyledTextArea
              rows="4"
              type="text"
              id="company_name"
              name="funding_reason"
              defaultValue={data.funding_reason}
            />
          </TextAreaDiv>
        </InputDiv>
      </div>
    </AppDetailsContainer>
  );
};

export default ApplicationDetails;
