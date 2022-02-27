import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import LoginContainer, {
  Form,
  Img,
  Img1,
  Img2,
  Input,
  InputDiv,
  Link,
  LinkToSignin,
  SideImageCon,
  BtnDiv,
  BackHomeLinkDiv,
} from './styled';
import companyLogo from '../../../assets/png/letgetstarted.png';
import Image1 from '../../../assets/png/Image1.png';
import Image2 from '../../../assets/png/Image3.png';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { clearMessage } from 'redux/slice/MessageSlice';
import { login } from 'redux/slice/AuthSlice';
import { Spin } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .max(40, 'Password must not exceed 40 characters')
      // .matches(
      //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      //   'Password must contain: numbers, uppercase and lowercase letters\n',
      // )
      .required('Password is required'),
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

const Login = () => {
  const matches = useMediaQuery('(max-width: 600px)');
  const [value, setCheckbox] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');

  const Navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember_me: false,
    },
    validationSchema,
    validate: validate(validationSchema),
    onSubmit: (data) => {
      setLoading(true);
      dispatch(
        login({
          email: data.email,
          password: data.password,
        }),
      )
        .unwrap()
        .then(() => {
          setLoading(false);
          formik.setSubmitting(false);

          Navigate('/dashboard');
        })
        .catch((error) => {
          setLoading(false);
          formik.setSubmitting(false);

          if (error.message === 'Rejected') {
            setErrorMessage('Email or password is incorrect');
          }
        });
    },
  });


  return (
    <LoginContainer>
      {matches ? (
        <Row>
          <Col span={24} style={{ padding: matches ? ' 3rem 1rem' : '3rem 5rem 5rem' }}>
            <div className="align_item_center">
              <Img src={companyLogo} alt="company logo" />
            </div>
            <div className="form_container">
              <Form className="styled_form" onSubmit={formik.handleSubmit}>
                <h4>Login</h4>
                <div className="text-danger">{ErrorMessage && ErrorMessage}</div>
                <InputDiv>
                  <div className="form-group">
                    <Input
                      name="email"
                      placeholder="Enter Email address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                  </div>
                  <div className="form-group">
                    <Input
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Password"
                    />
                    <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                  </div>
                </InputDiv>
                <div className="flex_space_btw">
                  <Checkbox
                    label="Remember Me"
                    name="remember_me"
                    value={value}
                    checked={value}
                    onClick={formik.handleReset}
                    onChange={({ target }) => setCheckbox(!value)}
                  />
                  <div>
                    <Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </div>
                <BtnDiv>
                  <Button
                    disabled={formik.isSubmitting}
                    type="submit"
                    color="primary"
                    width="fullWidth"
                    padding="14px 20px"
                  >
                    Login to Continue
                  </Button>
                </BtnDiv>
                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                )}
                <LinkToSignin>
                  <h6>
                    Don’t have an account ?<Link to="/register"> Register</Link>
                  </h6>
                </LinkToSignin>
              </Form>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={9} sm={9} md={9} lg={9} className="side_column">
            <SideImageCon>
              <Img1 src={Image1} alt="img" />
              <Img2 src={Image2} alt="img" />
            </SideImageCon>
            <BackHomeLinkDiv>
              <Link to="/">Back to Home</Link>
            </BackHomeLinkDiv>
          </Col>
          <Col xs={15} sm={15} md={15} lg={15} style={{ padding: '3rem 5rem 5rem' }}>
            <div className="align_item_center">
              <Img src={companyLogo} alt="company logo" />
            </div>
            <div className="form_container">
              <Form className="styled_form" onSubmit={formik.handleSubmit}>
                <h4>Login</h4>
                <div className="text-danger">{ErrorMessage && ErrorMessage}</div>
                <InputDiv>
                  <div className="form-group">
                    <Input
                      name="email"
                      placeholder="Enter Email address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                  </div>
                  <div className="form-group">
                    <Input
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Password"
                    />
                    <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                  </div>
                </InputDiv>
                <div className="flex_space_btw">
                  <Checkbox
                    label="Remember Me"
                    name="remember_me"
                    value={value}
                    checked={value}
                    onClick={formik.handleReset}
                    onChange={({ target }) => setCheckbox(!value)}
                  />
                  <div>
                    <Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </div>
                <BtnDiv>
                  <Button disabled={formik.isSubmitting ? true : false} type="submit" color="primary" width="fullWidth">
                    Login to Continue
                  </Button>
                </BtnDiv>
                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                )}
                <LinkToSignin>
                  <h6>
                    Don’t have an account ?<Link to="/register"> Register</Link>
                  </h6>
                </LinkToSignin>
              </Form>
            </div>
          </Col>
        </Row>
      )}
    </LoginContainer>
  );
};

export default Login;
