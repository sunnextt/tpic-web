import { Card, Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import LoginContainer, {
  Form,
  Img,
  Img1,
  Img2,
  Input,
  InputDiv,
  Link,
  BtnDiv,
  Label,
  ResetContainer,
  LinkDiv,
} from './styled';
import Button from 'components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { forgotpassword } from 'redux/slice/AuthSlice';
import { useLocation } from 'react-router-dom';

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
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

const ForgotPassword = () => {
  let { state } = useLocation();
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    validate: validate(validationSchema),
    onSubmit: (data) => {
      setMessage(false);
      console.log(data.email);
      dispatch(forgotpassword({ email: data.email }))
        .unwrap()
        .then(() => {
          formik.setSubmitting(false);

          setSuccess(true);
        })
        .catch(() => {
          formik.setSubmitting(false);

          setLoading(false);
        });
    },
  });

  useEffect(() => {
    if (state) {
      if (state.message === 'Rejected') {
        setMessage(true);
      }
    }
  }, [state]);

  if (success) {
    return (
      <ResetContainer>
        <Card style={{ width: 712, background: '#00A953', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="card_contents">
            <h4 style={{ textAlign: 'center' }}>Password Reset</h4>
            <h6>A message has been sent to you by email with instructions on how to reset your password.</h6>
            <LinkDiv>
              <Link to="/">Back to Home</Link>
            </LinkDiv>
          </div>
        </Card>
      </ResetContainer>
    );
  }

  return (
    <LoginContainer>
      <Row align="middle">
        <Col xs={24} sm={24} md={24} lg={24} className="col_style">
          <div className="form_container">
            <Form className="styled_form" onSubmit={formik.handleSubmit}>
              <h4>Forgot Password?</h4>
              {message && (
                <div className="alert alert-danger">Your password reset link is not valid, or already used.</div>
              )}
              <InputDiv>
                <div className="form-group">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    placeholder="Enter Email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                  <div className="text-danger">{error !== '' ? 'please provide valid email' : null}</div>
                </div>
              </InputDiv>
              <BtnDiv>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  color="primary"
                  width="fullWidth"
                  padding="10px 20px"
                >
                  Reset
                </Button>
              </BtnDiv>
              {loading && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Spin />
                </div>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </LoginContainer>
  );
};

export default ForgotPassword;
