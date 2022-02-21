import { Radio } from 'antd';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import ReactSelect from 'components/ReactSelect';
import React, { useState } from 'react';
import AppDetailsContainer from './styled';

const ApplicationDetails = ({ handleChangeInput, handlePrevious, onChange, value, errors, setFieldValue }) => {
  const [index, setIndex] = useState('');

  const handleindex = (e) => {
    handleChangeInput(e);
    setIndex(e.target.value);
  };

  const MIN0ptions = [
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' },
  ];

  const BUSOptions = [
    { value: 'Sole proprietorship', label: 'Sole proprietorship' },
    { value: 'Private Limited Company (Ltd)', label: 'Private Limited Company (Ltd)' },
    { value: 'Private Unlimited Company', label: 'Private Unlimited Company' },
  ];
  const BANK0ptions = [
    { value: 'UBA', label: 'UBA' },
    { value: 'GTB', label: 'GTB' },
  ];

  const AMOUNToptions = [
    { value: '25000', label: '25000' },
    { value: '50000', label: '50000' },
    { value: '75000', label: '75000' },
    { value: '100000', label: '100000' },
    { value: '200000', label: '200000' },
    { value: '500000', label: '500000' },
    { value: '1000000', label: '1000000' },
  ];

  const styles = {
    width: '100%',
  };

  return (
    <AppDetailsContainer>
      <div className="styled_form">
        <div className="application_reason">
          <Radio.Group name="reason" onChange={handleindex} value={index}>
            <Radio value="Business Venture">Business Venture</Radio>
            <Radio value="Skills Aquisition">Skills Aquisition</Radio>
          </Radio.Group>
        </div>
        <InputDiv>
          {index === 'Business Venture' ? (
            <InputLabel>
              <Label>Business Name</Label>
              <Input
                type="text"
                name="previous_business_name"
                value={value.previous_business_name}
                onChange={onChange}
                placeholder="Enter your business name"
              />
              {errors.previous_business_name && <div className="text-danger">{errors.previous_business_name}</div>}
            </InputLabel>
          ) : (
            <ReactSelect
              name="skills_acquisition"
              value={value.skills_acquisition}
              setFieldValue={setFieldValue}
              placeholder="Select Skills"
              label="Skills Aquisition"
              options={MIN0ptions}
              errors={errors.skills_acquisition}
            />
          )}
          <ReactSelect
            label="Amount Needed"
            name="amount_needed"
            value={value.amount_needed}
            setFieldValue={setFieldValue}
            placeholder="NGN"
            colourStyles={styles}
            width="300px"
            options={AMOUNToptions}
            errors={errors.amount_needed}
          />
          {index === 'Business Venture' ? (
            <ReactSelect
              label="Business Type"
              value={value.business_type}
              setFieldValue={setFieldValue}
              handleChangeInput={handleChangeInput}
              name="business_type"
              placeholder="Business Type"
              options={BUSOptions}
              errors={errors.business_type}
            />
          ) : (
            <ReactSelect
              label="Skills Type"
              value={value.skills_type}
              setFieldValue={setFieldValue}
              handleChangeInput={handleChangeInput}
              name="skills_type"
              placeholder="Skills Type"
              options={MIN0ptions}
              errors={errors.skills_type}
            />
          )}
          <InputLabel>
            <Label>Bank Account</Label>
            <Input
              name="bank_account_number"
              value={value.bank_account_number}
              onChange={onChange}
              type="text"
              placeholder="Enter Bank Account"
            />
            {errors.bank_account_number && <div className="text-danger">{errors.bank_account_number}</div>}
          </InputLabel>
          <ReactSelect
            label="Have you been in any business before now?"
            name="skills_type"
            placeholder="YES or NO"
            value={value.skills_type}
            setFieldValue={setFieldValue}
            options={MIN0ptions}
            errors={errors.skills_type}
          />
          <ReactSelect
            label="Bank Name"
            value={value.bank_name}
            setFieldValue={setFieldValue}
            name="bank_name"
            placeholder="Select Bank"
            options={BANK0ptions}
            errors={errors.bank_name}
          />
          <InputLabel>
            <Label>If yes, please provide details</Label>
            <Input
              name="previous_business_details"
              onChange={onChange}
              value={value.previous_business_details}
              type="text"
              placeholder=""
            />
            {errors.previous_business_details && <div className="text-danger">{errors.previous_business_details}</div>}
          </InputLabel>
          <TextAreaDiv>
            <Label>Tell us why TredKJ Lifters should fund your business</Label>
            <StyledTextArea
              rows="4"
              value={value.funding_reason}
              onChange={onChange}
              type="text"
              id="funding_reason"
              name="funding_reason"
              placeholder="State reason"
            />
            {errors.funding_reason && <div className="text-danger">{errors.funding_reason}</div>}
          </TextAreaDiv>
        </InputDiv>
      </div>
    </AppDetailsContainer>
  );
};

export default ApplicationDetails;

// <Amountfees>
//   <h6>₦25,000 - ₦50,000</h6>
// </Amountfees>;
