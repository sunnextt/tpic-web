import { PageHeader } from 'antd';
import Button from 'components/Button';
import { Input, InputDiv, InputLabel, Label } from 'components/Input';
import React from 'react';
import SettingsContainer, { Form } from './styled';
import { useMediaQuery } from 'usehooks-ts';
import { useSelector } from 'react-redux';

const SettingsPage = () => {
  const matches = useMediaQuery('(max-width: 600px)');
  const { user: currentUser } = useSelector((state) => state.auth);

  const { data } = currentUser || {};

  const username = `${data && data.first_name} ${data && data.last_name}`;

  return (
    <SettingsContainer>
      <PageHeader className="ant-page-header" title="Settings" />
      <Form>
        <InputDiv>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>First Name</Label>
            <Input name="first_name" type="text" placeholder={data && data.first_name} />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Last Name</Label>
            <Input name="last_name" type="text" placeholder={data && data.last_name} />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Email Address</Label>
            <Input name="email" type="text" placeholder={data && data.email} />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Phone Number</Label>
            <Input name="phone_number" type="text" placeholder={data && data.phone_number} />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
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
