import { Button } from 'antd';
import { LinkButton } from 'components/Button/styled';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import { Button as ContinueButton } from 'components/Button';
import RadioButton from 'components/RadioButton';
import ReactSelect from 'components/ReactSelect';
import React, { useState } from 'react';
import AppDetailsContainer from './styled';

const ApplicationDetails = () => {
  const [radioValue, setRadio] = useState(true);

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
          <RadioButton
            label="Business Venture"
            name="business_venture"
            value={radioValue}
            checked={radioValue}
            onChange={({ target }) => {
              console.log(target.value);
              setRadio(Boolean(target.value));
            }}
          />
          <RadioButton
            label="Skills Aquisition"
            name="Skills_aquisition"
            value={radioValue}
            checked={radioValue}
            onChange={({ target }) => {
              console.log(target.value);
              setRadio(Boolean(target.value));
            }}
          />
        </div>
        <InputDiv>
          <ReactSelect name="skills_acquisition" placeholder="International Passport" label="Means of Identification" />
          <ReactSelect
            label="Amount Needed"
            name="amount_needed"
            placeholder="NGN"
            colourStyles={styles}
            width="300px"
          />
          <ReactSelect label="Skills Type" name="skills_type" placeholder="Means of Identification" />
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
