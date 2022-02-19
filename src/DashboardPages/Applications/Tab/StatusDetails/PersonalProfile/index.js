import { Form, Input, InputDiv, InputLabel, Label } from 'components/Input';
import React from 'react';
import PPCTs from './styled';

const PersonalProfile = ({ data }) => {
  return (
    <PPCTs>
      <div className="form_container">
        <Form className="styled_form">
          <InputDiv>
            <InputLabel>
              <Label>First Name</Label>
              <Input name="name" type="text" defaultValue={data.firstname} placeholder="Enter your name" />
            </InputLabel>
            <InputLabel>
              <Label>Last Name</Label>
              <Input name="name" type="text" defaultValue={data.lastname} placeholder="Enter Last name" />
            </InputLabel>
            <InputLabel>
              <Label>Email Address</Label>
              <Input name="name" type="text" defaultValue={data.email} />
            </InputLabel>
            <InputLabel>
              <Label>Phone Number</Label>
              <Input name="name" type="text" defaultValue={data.phone} />
            </InputLabel>
            <InputLabel width="fullWidth">
              <Label>Residential Address</Label>
              <Input width="fullWidth" name="name" type="text" defaultValue={data.address} />
            </InputLabel>
            <InputLabel>
              <Label>Country</Label>
              <Input name="country" type="text" defaultValue={data.country} />
            </InputLabel>
            <InputLabel>
              <Label>State</Label>
              <Input name="state" type="text" defaultValue={data.state} />
            </InputLabel>
            <InputLabel>
              <Label>Means of Identification</Label>
              <Input name="min" type="text" defaultValue={data.means_of_identification} />
            </InputLabel>
            <InputLabel>
              <Label>ID Number</Label>
              <Input name="name" type="text" defaultValue={data.id_number} />
            </InputLabel>
          </InputDiv>
        </Form>
      </div>
    </PPCTs>
  );
};

export default PersonalProfile;
