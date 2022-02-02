import { Form, Input, InputDiv, InputLabel, Label } from 'components/Input';
import React from 'react';
import PPCTs from './styled';


const PersonalProfile = () => {
  return (
    <PPCTs>
      <div className="form_container">
        <Form className="styled_form">
          <InputDiv>
            <InputLabel>
              <Label>First Name</Label>
              <Input name="name" type="text" placeholder="Enter your name" />
            </InputLabel>
            <InputLabel>
              <Label>Last Name</Label>
              <Input name="name" type="text" placeholder="Enter Last name" />
            </InputLabel>
            <InputLabel>
              <Label>Email Address</Label>
              <Input name="name" type="text" placeholder="Enter Email Address" />
            </InputLabel>
            <InputLabel>
              <Label>Phone Number</Label>
              <Input name="name" type="text" placeholder="Phone number" />
            </InputLabel>
            <InputLabel width="fullWidth">
              <Label>Residential Address</Label>
              <Input width="fullWidth" name="name" type="text" placeholder="Enter your name" />
            </InputLabel>
            <InputLabel>
              <Label>Country</Label>
              <Input name="country" type="text" placeholder="Nigeria" />
            </InputLabel>
            <InputLabel>
              <Label>State</Label>
              <Input name="state" type="text" placeholder="Lagos" />
            </InputLabel>
            <InputLabel>
              <Label>Means of Identification</Label>
              <Input name="min" type="text" placeholder="International Passport" />
            </InputLabel>
            <InputLabel>
              <Label>ID Number</Label>
              <Input name="name" type="text" placeholder="ID Number" />
            </InputLabel>
          </InputDiv>
        </Form>
      </div>
    </PPCTs>
  );
};

export default PersonalProfile;
