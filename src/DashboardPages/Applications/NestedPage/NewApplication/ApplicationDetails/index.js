import { Radio } from 'antd';
import { Input, InputDiv, InputLabel, Label, StyledTextArea, TextAreaDiv } from 'components/Input';
import ReactSelect from 'components/ReactSelect';
import React, { useState } from 'react';
import AppDetailsContainer from './styled';

const ApplicationDetails = ({ bankData, onChange, value, errors, setFieldValue }) => {
  const [index, setIndex] = useState('');

  const handleindex = (e) => {
    setFieldValue('reason', e.target.value);
    setIndex(e.target.value);
  };

  const MIN0ptions = [
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' },
  ];
  const SkillsOptions = [
    { value: 'Barbing', label: 'Barbing' },
    { value: 'Fashion Design', label: 'Fashion Design' },
    { value: 'Automobile Repairs', label: 'Automobile Repairs' },
    { value: 'Painters', label: 'Painters' },
    { value: 'White-Collar Skill Acquisition Program', label: 'White-Collar Skill Acquisition Program' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Management and Administration', label: 'Management and Administration' },
    { value: 'Media Skills', label: 'Media Skills' },
  ];

  const BUSOptions = [
    { value: 'Sole proprietorship', label: 'Sole proprietorship' },
    { value: 'Private Limited Company (Ltd)', label: 'Private Limited Company (Ltd)' },
    { value: 'Private Unlimited Company', label: 'Private Unlimited Company' },
  ];

  const AMOUNToptions = [
    { value: '25000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(25000) },
    { value: '50000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(50000) },
    { value: '75000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(75000) },
    { value: '100000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(100000) },
    { value: '200000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(200000) },
    { value: '500000', label: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(500000) },
  ];

  const styles = {
    width: '100%',
  };

  return (
    <AppDetailsContainer>
      <div className="styled_form">
        <div className="application_reason">
          <Radio.Group name="reason" onChange={handleindex} value={value.reason}>
            <Radio value="Business Venture">Business Venture</Radio>
            <Radio value="Skills Aquisition">Skills Aquisition</Radio>
          </Radio.Group>
        </div>
        {errors.reason && <div className="text-danger">{errors.reason}</div>}

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
              placeholder={value.skills_acquisition ? value.skills_acquisition : 'Select Skills'}
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
            placeholder={value.amount_needed ? value.amount_needed : 'NGN'}
            colourStyles={styles}
            width="300px"
            options={AMOUNToptions}
            errors={errors.amount_needed}
          />
          {index === 'Business Venture' ? (
            <ReactSelect
              label="Business Type"
              value={value.appResonType}
              setFieldValue={setFieldValue}
              // handleChangeInput={handleChangeInput}
              name="appResonType"
              placeholder={value.appResonType ? value.appResonType : 'Type'}
              options={BUSOptions}
              errors={errors.appResonType}
            />
          ) : (
            <ReactSelect
              label="Skills Type"
              value={value.appResonType}
              setFieldValue={setFieldValue}
              // handleChangeInput={handleChangeInput}
              name="appResonType"
              placeholder={value.appResonType ? value.appResonType : 'Type'}
              options={SkillsOptions}
              errors={errors.appResonType}
            />
          )}
          <InputLabel>
            <Label>Bank Account</Label>
            <Input
              name="bank_account_number"
              value={value.bank_account_number}
              onChange={onChange}
              type="text"
              placeholder={value.bank_account_number ? value.bank_account_number : 'Enter Bank Account'}
            />
            {errors.bank_account_number && <div className="text-danger">{errors.bank_account_number}</div>}
          </InputLabel>
          <ReactSelect
            label="Have you been in any business before now?"
            name="is_previous_business"
            placeholder={value.is_previous_business ? value.is_previous_business : 'YES or NO'}
            value={value.is_previous_business}
            setFieldValue={setFieldValue}
            options={MIN0ptions}
            errors={errors.is_previous_business}
          />
          <ReactSelect
            label="Bank Name"
            value={value.bank_name}
            setFieldValue={setFieldValue}
            name={value.bank_name ? value.bank_name : 'bank_name'}
            placeholder={value.bank_name ? value.bank_name : 'Select Bank'}
            options={bankData}
            errors={errors.bank_name}
          />
          <InputLabel>
            <Label>If yes, please provide details</Label>
            <Input
              name="previous_business_details"
              value={value.previous_business_details}
              onChange={onChange}
              placeholder={value.previous_business_details ? value.previous_business_details : 'Previous details'}
              type="text"
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
