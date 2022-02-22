import { PageHeader } from 'antd';
import Button from 'components/Button';
import { Input, InputDiv, InputLabel, Label } from 'components/Input';
import React, { useEffect, useState } from 'react';
import SettingsContainer, { Form } from './styled';
import { useMediaQuery } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { updateUserProfile } from 'redux/slice/applicationDataSlice';

const SettingsPage = ({ data }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { data: initialData } = currentUser || {};

  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width: 600px)');
  const [error, setError] = useState('');

  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, [data]);

  const notify = (message) =>
    // eslint-disable-next-line no-template-curly-in-string
    toast.success(message, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [profile, setProfile] = useState({
    first_name: profileData ? profileData.first_name : initialData.first_name,
    last_name: profileData ? profileData.last_name : initialData.last_name,
    email: profileData ? profileData.email : initialData.email,
    phone_number: profileData ? profileData.phone_number : initialData.phone_number,
    password: '',
    password_confirmation: '',
  });

  const { first_name, last_name, email, phone_number, password, password_confirmation } = profile;

  console.log(profile.first_name);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      updateUserProfile({
        first_name,
        last_name,
        email,
        phone_number,
        password,
        password_confirmation,
      }),
    )
      .unwrap()
      .then((res) => {
        setError('');
        notify(res.message);
      })
      .catch((err) => {
        const error =
          (err && err.errors && err.errors.first_name) ||
          err.errors.last_name ||
          err.errors.email ||
          err.errors.password;
        setError(error[0]);
      });
  };

  return (
    <SettingsContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PageHeader className="ant-page-header" title="Settings" />
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>First Name</Label>
            <Input
              name="first_name"
              type="text"
              defaultValue={data && data.first_name}
              placeholder={profileData && profileData.first_name}
              onChange={handleChangeInput}
            />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Last Name</Label>
            <Input
              name="last_name"
              type="text"
              defaultValue={profileData && profileData.last_name}
              placeholder={profileData && profileData.last_name}
              onChange={handleChangeInput}
            />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Email Address</Label>
            <Input
              name="email"
              type="text"
              defaultValue={profileData && profileData.email}
              placeholder={profileData && profileData.email}
              onChange={handleChangeInput}
            />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Phone Number</Label>
            <Input
              name="phone_number"
              type="text"
              defaultValue={profileData && profileData.phone_number}
              placeholder={profileData && profileData.phone_number}
              onChange={handleChangeInput}
            />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" onChange={handleChangeInput} />
          </InputLabel>
          <InputLabel width={matches ? 'fullWidth' : '48%'}>
            <Label>Confirm Password</Label>
            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChangeInput}
            />
          </InputLabel>
        </InputDiv>
        <div className="text-danger">{error !== '' && error}</div>
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
