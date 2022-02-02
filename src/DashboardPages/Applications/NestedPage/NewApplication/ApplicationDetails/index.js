import { Button, Radio } from 'antd';
import { LinkButton } from 'components/Button/styled';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import { Button as ContinueButton } from 'components/Button';
import ReactSelect from 'components/ReactSelect';
import React, { useState } from 'react';
import AppDetailsContainer from './styled';

const ApplicationDetails = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  const MIN0ptions = [
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' },
  ];

  const styles = {
    width: '100%',
  };

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
          {value === 1 ? (
            <ReactSelect name="business_name" placeholder="Enter your business name" label="Business Name" />
          ) : (
            <ReactSelect name="skills_acquisition" placeholder="Select Skills" label="Skills Aquisition" />
          )}
          <ReactSelect
            label="Amount Needed"
            name="amount_needed"
            placeholder="NGN"
            colourStyles={styles}
            width="300px"
          />
          {value === 1 ? (
            <ReactSelect label="Business Type" name="skills_type" placeholder="Means of Identification" />
          ) : (
            <ReactSelect label="Skills Type" name="skills_type" placeholder="Means of Identification" />
          )}
          <InputLabel>
            <Label>Bank Account</Label>
            <Input name="bank_account" type="text" placeholder="Enter Bank Account" />
          </InputLabel>
          <ReactSelect
            label="Have you been in any business before now?"
            name="skills_type"
            placeholder="YES or NO"
            options={MIN0ptions}
          />
          <ReactSelect label="Bank Name" name="bank_name" placeholder="Select Bank" options={MIN0ptions} />
          <InputLabel>
            <Label>If yes, please provide details</Label>
            <Input name="bank_account" type="text" placeholder="" />
          </InputLabel>
          <TextAreaDiv>
            <Label>Tell us why TredKJ Lifters should fund your business</Label>
            <StyledTextArea rows="4" type="text" id="company_name" name="tell_us_why" placeholder="State reason" />
          </TextAreaDiv>
        </InputDiv>
        <div className="pre_next_div">
          <Button>Previous</Button>
          <div className="flex_space_btw">
            <LinkButton>Save & finish later</LinkButton>
            <ContinueButton color="primary" padding="16px 36px">
              Continue
            </ContinueButton>
          </div>
        </div>
      </div>
    </AppDetailsContainer>
  );
};

export default ApplicationDetails;
