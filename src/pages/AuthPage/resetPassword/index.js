import { Col, Row } from 'antd';
import React, { useState } from 'react';
import LoginContainer, { Form, Img, Input, InputDiv, Link, BtnDiv, Label } from './styled';
import companyLogo from '../../../assets/png/letgetstarted.png';
import Button from 'components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { resetpassword } from 'redux/slice/AuthSlice';
import useQuery from '../../../utils/useQuery/index';

const validationSchema = function (values) {
  return Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    password_confirmation: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
};

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

const ResetPassword = () => {
  let query = useQuery();
  const token = query.get('token');
  const [successReset, setSuccessReset] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password_confirmation: '',
    },
    validationSchema,
    validate: validate(validationSchema),
    onSubmit: (data) => {
      setLoading(true);
      console.log(data.email);
      dispatch(resetpassword({ token, email: data.email, password_confirmation: data.password_confirmation }))
        .unwrap()
        .then((res) => {
          console.log(res);
          setSuccessReset(true);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    },
  });

  const styles = {
    color: '#f1c40f',
  };

  if (successReset) {
    return (
      <div>
        <div className="signup_header">
          <h2>Password Reset</h2>
          <h6>
            Congratulations! Your new password has now been set.{' '}
            <a style={styles} href="/login">
              Go to account
            </a>
          </h6>
        </div>
      </div>
    );
  }

  return (
    <LoginContainer>
      <Row align="middle">
        <Col xs={24} sm={24} md={24} lg={24} className="col_style">
          <div className="align_item_center">
            <Img src={companyLogo} alt="company logo" />
          </div>
          <div className="form_container">
            <Form className="styled_form" onSubmit={formik.handleSubmit}>
              <h4>Reset Password?</h4>
              <InputDiv>
                <div className="form-group">
                  <Label>Password</Label>
                  <Input
                    name="password"
                    placeholder="Enter your new password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                </div>
                <div className="form-group">
                  <Label>Confirm Password</Label>
                  <Input
                    name="password_confirmation"
                    placeholder="Enter Email address"
                    onChange={formik.handleChange}
                    value={formik.values.password_confirmation}
                  />
                  <div className="text-danger">
                    {formik.errors.password_confirmation ? formik.errors.password_confirmation : null}
                  </div>
                </div>
              </InputDiv>
              <BtnDiv>
                <Button type="submit" color="primary" width="fullWidth" padding="10px 20px">
                  Reset
                </Button>
              </BtnDiv>
            </Form>
          </div>
        </Col>
      </Row>
    </LoginContainer>
  );
};

export default ResetPassword;
