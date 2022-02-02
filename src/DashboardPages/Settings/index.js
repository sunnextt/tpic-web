import { PageHeader } from 'antd';
import Button from 'components/Button';
import { Input, InputDiv, InputLabel, Label } from 'components/Input';
import React from 'react';
import SettingsContainer, { Form } from './styled';

const SettingsPage = () => {
  return (
    <SettingsContainer>
      <PageHeader className="ant-page-header" title="Settings" />
      <Form>
        <InputDiv>
          <InputLabel width="48%">
            <Label>First Name</Label>
            <Input name="first_name" type="text" placeholder="josh" />
          </InputLabel>
          <InputLabel width="48%">
            <Label>Last Name</Label>
            <Input name="last_name" type="text" placeholder="Osazuwa" />
          </InputLabel>
          <InputLabel width="48%">
            <Label>Email Address</Label>
            <Input name="email" type="text" placeholder="joshosazuwa@yahoo.com" />
          </InputLabel>
          <InputLabel width="48%">
            <Label>Phone Number</Label>
            <Input name="phone_number" type="text" placeholder="Phone Number" />
          </InputLabel>
          <InputLabel width="48%">
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" />
          </InputLabel>
        </InputDiv>
        <div style={{ marginTop: '1rem' }}>
          <Button color="primary" padding="16px 36px">
            Save Changes
          </Button>
        </div>
      </Form>
    </SettingsContainer>
  );
};

export default SettingsPage;
