import Button from 'components/Button';
import { Form, Input, InputDiv, InputLabel, Label } from 'components/Input';
import ReactSelect from 'components/ReactSelect';
import React from 'react';
import PPCTs, { LinkButton, SaveAndContBtnDiv } from './styled';

const colourStyles = {
  background: 'red',
  color: 'red',
};

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
            <ReactSelect
              className="selectinput"
              name="country"
              placeholder="Nigeria"
              Label="Country"
              colourStyles={colourStyles}
            />
            <ReactSelect className="className" name="state" placeholder="Lagos" Label="state" />
            <ReactSelect
              className="className"
              name="id"
              placeholder="International Passport"
              Label="Means of Identification"
            />
            <InputLabel>
              <Label>ID Number</Label>
              <Input name="name" type="text" placeholder="ID Number" />
            </InputLabel>
          </InputDiv>
          <SaveAndContBtnDiv>
            <LinkButton type="button">Save & finish later</LinkButton>
            <Button color="primary" width="20%" height="50px">
              Continue
            </Button>
          </SaveAndContBtnDiv>
        </Form>
      </div>
    </PPCTs>
  );
};

export default PersonalProfile;
