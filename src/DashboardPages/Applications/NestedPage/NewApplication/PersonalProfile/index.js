import { Formdiv, Input, InputDiv, InputLabel, Label } from 'components/Input';
import ReactSelect from 'components/ReactSelect';
import React, { useEffect } from 'react';
import PPCTs from './styled';
import state from '../../../../../utils/data/state.json';

const colourStyles = {};

const PersonalProfile = ({ draftData, onChange, value, errors, setFieldValue }) => {
  const [stateList, setStateList] = React.useState(null);

  useEffect(() => {
    let ModifiedData = state.map((list) => {
      return {
        // value: list.code,
        value: list.code,
        label: list.name,
      };
    });

    setStateList(ModifiedData);
  }, []);

  const NIN0ptions = [
    { value: 'NIN', label: 'NIN' },
    { value: 'international passport', label: 'International passport' },
    { value: 'Diver License', label: 'Diver License' },
  ];

  const countryoptions = [
    { value: 'Nigeria', label: 'Nigeria' },
    // { value: 'Ghana', label: 'Ghana' },
    // { value: 'South Africa', label: 'South Africa' },
    // { value: 'UK', label: 'UK' },
    // { value: 'USA', label: 'USA' },
  ];

  // console.log(draftData.firstname);

  return (
    <PPCTs>
      <div className="form_container">
        <Formdiv className="styled_form">
          <InputDiv>
            <InputLabel>
              <Label>First Name</Label>
              <Input
                value={value.firstname}
                onChange={onChange}
                name="firstname"
                type="text"
                placeholder="Enter First name"
              />
              {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
            </InputLabel>
            <InputLabel>
              <Label>Last Name</Label>
              <Input
                value={value.lastname}
                name="lastname"
                onChange={onChange}
                type="text"
                placeholder="Enter Last name"
              />
              {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
            </InputLabel>
            <InputLabel>
              <Label>Email Address</Label>
              <Input
                value={value.email}
                onChange={onChange}
                name="email"
                type="text"
                placeholder="Enter Email Address"
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </InputLabel>
            <InputLabel>
              <Label>Phone Number</Label>
              <Input value={value.phone} onChange={onChange} name="phone" type="text" placeholder="Phone number" />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </InputLabel>
            <InputLabel width="fullWidth">
              <Label>Residential Address</Label>
              <Input
                value={value.address}
                onChange={onChange}
                width="fullWidth"
                name="address"
                type="text"
                placeholder="Enter your name"
              />
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </InputLabel>
            <ReactSelect
              value={value.country}
              className="selectinput"
              name="country"
              placeholder="Nigeria"
              label="Country"
              colourStyles={colourStyles}
              errors={errors.country}
              setFieldValue={setFieldValue}
              options={countryoptions}
            />
            <ReactSelect
              className="className"
              name="state"
              placeholder="Lagos"
              label="state"
              value={value.state}
              setFieldValue={setFieldValue}
              options={stateList}
            />
            <ReactSelect
              value={value.second_means_of_identification}
              className="className"
              name="second_means_of_identification"
              placeholder="International Passport"
              label="Means of Identification"
              errors={errors.second_means_of_identification}
              options={NIN0ptions}
              setFieldValue={setFieldValue}
            />
            <InputLabel>
              <Label>ID Number</Label>
              <Input value={value.id_number} onChange={onChange} name="id_number" type="text" placeholder="ID Number" />
              {errors.id_number && <div className="text-danger">{errors.id_number}</div>}
            </InputLabel>
          </InputDiv>
          <div>
            <h4 className="guardian_header">Parent/Guardian details</h4>
            <InputDiv>
              <InputLabel>
                <Label>Full Name</Label>
                <Input
                  value={value.guardian_fullname}
                  onChange={onChange}
                  name="guardian_fullname"
                  type="text"
                  placeholder="Enter your Guardian Full name"
                />
                {errors.guardian_fullname && <div className="text-danger">{errors.guardian_fullname}</div>}
              </InputLabel>
              <InputLabel>
                <Label>Email</Label>
                <Input
                  value={value.guardian_email}
                  onChange={onChange}
                  name="guardian_email"
                  type="text"
                  placeholder="Enter your Guardian email address"
                />
                {errors.guardian_email && <div className="text-danger">{errors.guardian_email}</div>}
              </InputLabel>
              <InputLabel>
                <Label>Phone Number</Label>
                <Input
                  value={value.guardian_phone}
                  onChange={onChange}
                  name="guardian_phone"
                  type="text"
                  placeholder="Enter your guardian phone number"
                />
                {errors.guardian_phone && <div className="text-danger">{errors.guardian_phone}</div>}
              </InputLabel>
              <InputLabel>
                <Label>Address</Label>
                <Input
                  value={value.guardian_address}
                  onChange={onChange}
                  name="guardian_address"
                  type="text"
                  placeholder="Enter your guardian address"
                />
                {errors.guardian_address && <div className="text-danger">{errors.guardian_address}</div>}
              </InputLabel>
            </InputDiv>
          </div>
        </Formdiv>
      </div>
    </PPCTs>
  );
};

export default PersonalProfile;
