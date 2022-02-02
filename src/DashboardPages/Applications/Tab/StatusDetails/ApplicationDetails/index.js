import React, { useState } from 'react';
import {  Radio } from 'antd';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import AppDetailsContainer from './styled';

const ApplicationDetails = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);


  return (
    <AppDetailsContainer>
      <div className="styled_form">
        <div className="application_reason">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Business Venture</Radio>
            <Radio value={2}>Skills Aquisition</Radio>
          </Radio.Group>
        </div>
        <InputDiv>
          <InputLabel>
            <Label>Business Name</Label>
            <Input name="bank_account" type="text" placeholder="Enter Bank Account" />
          </InputLabel>
          <InputLabel>
            <Label>Amount Needed</Label>
            <Input name="amount_needed" type="text" placeholder="NGN 200,000" />
          </InputLabel>
          <InputLabel>
            <Label>Business Type</Label>
            <Input name="business_type" type="text" placeholder="Design" />
          </InputLabel>
          <InputLabel>
            <Label>Bank Account</Label>
            <Input name="bank_account" type="text" placeholder="1104748392" />
          </InputLabel>
          <InputLabel>
            <Label>Have you been in any business before now?</Label>
            <Input name="skills_type" type="text" placeholder="NO" />
          </InputLabel>
          <InputLabel>
            <Label>Bank Name</Label>
            <Input name="bank_name" type="text" placeholder="Zenith" />
          </InputLabel>
          <InputLabel width="fullWidth">
            <Label>If yes, please provide details</Label>
            <Input name="bank_account" type="text" placeholder="" />
          </InputLabel>
          <TextAreaDiv>
            <Label>Tell us why TredKJ Lifters should fund your business</Label>
            <StyledTextArea rows="4" type="text" id="company_name" name="tell_us_why" placeholder="State reason" />
          </TextAreaDiv>
        </InputDiv>
      </div>
    </AppDetailsContainer>
  );
};

export default ApplicationDetails;
