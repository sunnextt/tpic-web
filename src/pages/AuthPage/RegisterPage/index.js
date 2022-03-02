import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import RegisterContainer, {
  CheckboxDiv,
  Form,
  Img,
  Img1,
  Img2,
  Input,
  InputDiv,
  InputLabel,
  Label,
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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from 'redux/slice/MessageSlice';
import { register } from 'redux/slice/AuthSlice';
import { Spin } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = function (values) {
  return Yup.object().shape({
    first_name: Yup.string().required('Firstname is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    password_confirmation: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
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

const Register = () => {
  const matches = useMediaQuery('(max-width: 600px)');
  const { message } = useSelector((state) => state.message);

  const [value] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);

  const Navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: '',
      acceptTerms: false,
    },

    validationSchema,
    validate: validate(validationSchema),
    onSubmit: (data) => {
      setLoading(true);
      dispatch(
        register({
          email: data.email,
          password: data.password,
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          password_confirmation: data.password_confirmation,
          acceptTerms: false,
        }),
      )
        .unwrap()
        .then(() => {
          setLoading(false);
          formik.setSubmitting(false);
          Navigate('/dashboard');
          // window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          formik.setSubmitting(false);
          if (error.message === 'Rejected') {
            setErrorMessage(error.message);
          }
        });
    },
  });

  useEffect(() => {
    if (ErrorMessage === 'Rejected') {
      setErrorMessage(message);
    }
  }, [ErrorMessage, message]);


  return (
    <RegisterContainer>
      {matches ? (
        <Row>
          <Col span={24} style={{ padding: matches ? ' 3rem 1rem' : '3rem 5rem 5rem' }}>
            <div className="align_item_center">
              <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Img src={companyLogo} alt="company logo" />
              </Link>
            </div>
            <div className="form_container">
              <Row>
                <Col>
                  <Form className="styled_form" onSubmit={formik.handleSubmit}>
                    <h4>Create an account</h4>
                    <div className="text-danger">{ErrorMessage && ErrorMessage}</div>
                    <InputDiv>
                      <InputLabel>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                          id="first_name"
                          name="first_name"
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                          placeholder="Enter your first name"
                        />
                        <div className="text-danger">{formik.errors.first_name ? formik.errors.first_name : null}</div>{' '}
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                          id="last_name"
                          name="last_name"
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                          placeholder="Enter your last name"
                        />
                        <div className="text-danger">{formik.errors.last_name ? formik.errors.last_name : null}</div>{' '}
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Enter your email"
                        />
                        <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                          id="phone_number"
                          name="phone_number"
                          onChange={formik.handleChange}
                          value={formik.values.phone_number}
                          placeholder="Enter a valid phone number"
                        />
                        <div className="text-danger">
                          {formik.errors.phone_number ? formik.errors.phone_number : null}
                        </div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          id="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Enter password"
                        />
                        <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="comfirm_password">Comfirm Password</Label>
                        <Input
                          id="password_confirmation"
                          name="password_confirmation"
                          onChange={formik.handleChange}
                          value={formik.values.password_confirmation}
                          type="password"
                          placeholder="Retype password"
                        />
                        <div className="text-danger">
                          {formik.errors.password_confirmation ? formik.errors.password_confirmation : null}
                        </div>
                      </InputLabel>
                    </InputDiv>
                    <CheckboxDiv>
                      <div className=" form-check">
                        <Checkbox
                          path="/docs/terms.pdf"
                          link=" terms & conditions"
                          label="Accept"
                          name="acceptTerms"
                          checked={value}
                          onChange={formik.handleChange}
                          value={formik.values.acceptTerms}
                        />
                        <div className="text-danger">
                          {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
                        </div>
                      </div>
                      <BtnDiv>
                        <Button
                          disabled={formik.isSubmitting}
                          type="submit"
                          color="primary"
                          padding="14px 20px"
                          width="fullWidth"
                        >
                          Create Account
                        </Button>
                        {loading && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginLeft: '4rem',
                              padding: '1rem 0 0 10px',
                            }}
                          >
                            <Spin />
                          </div>
                        )}
                      </BtnDiv>
                    </CheckboxDiv>
                    <LinkToSignin>
                      <h6>
                        Don’t have an account ?<Link to="/login"> Sign in</Link>
                      </h6>
                    </LinkToSignin>
                  </Form>
                </Col>
              </Row>
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
              <Row>
                <Col>
                  <Form className="styled_form" onSubmit={formik.handleSubmit}>
                    <h4>Create an account</h4>
                    <div className="text-danger">{ErrorMessage && ErrorMessage}</div>
                    <InputDiv>
                      <InputLabel>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                          id="first_name"
                          name="first_name"
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                          placeholder="Enter your first name"
                        />
                        <div className="text-danger">{formik.errors.first_name ? formik.errors.first_name : null}</div>{' '}
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                          id="last_name"
                          name="last_name"
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                          placeholder="Enter your last name"
                        />
                        <div className="text-danger">{formik.errors.last_name ? formik.errors.last_name : null}</div>{' '}
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Enter your email"
                        />
                        <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                          id="phone_number"
                          name="phone_number"
                          onChange={formik.handleChange}
                          value={formik.values.phone_number}
                          placeholder="Enter a valid phone number"
                        />
                        <div className="text-danger">
                          {formik.errors.phone_number ? formik.errors.phone_number : null}
                        </div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          id="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Enter password"
                        />
                        <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                      </InputLabel>
                      <InputLabel>
                        <Label htmlFor="comfirm_password">Comfirm Password</Label>
                        <Input
                          id="password_confirmation"
                          name="password_confirmation"
                          onChange={formik.handleChange}
                          value={formik.values.password_confirmation}
                          type="password"
                          placeholder="Retype password"
                        />
                        <div className="text-danger">
                          {formik.errors.password_confirmation ? formik.errors.password_confirmation : null}
                        </div>
                      </InputLabel>
                    </InputDiv>
                    <CheckboxDiv>
                      <div className=" form-check">
                        <Checkbox
                          path="/docs/terms.pdf"
                          link=" terms & conditions"
                          label="Accept"
                          name="acceptTerms"
                          checked={value}
                          onChange={formik.handleChange}
                          value={formik.values.acceptTerms}
                        />
                        <div className="text-danger">
                          {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
                        </div>
                      </div>
                      <BtnDiv>
                        <Button disabled={formik.isSubmitting} type="submit" color="primary">
                          Create Account
                        </Button>
                        {loading && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginLeft: '4rem',
                              padding: '1rem 0 0 10px',
                            }}
                          >
                            <Spin />
                          </div>
                        )}
                      </BtnDiv>
                    </CheckboxDiv>
                    <LinkToSignin>
                      <div />
                      <h6>
                        Don’t have an account ?<Link to="/login"> Sign in</Link>
                      </h6>
                    </LinkToSignin>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </RegisterContainer>
  );
};

export default Register;
