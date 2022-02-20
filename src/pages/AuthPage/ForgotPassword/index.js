import { Col, Row } from 'antd';
import React from 'react';
import LoginContainer, {
  Form,
  Img,
  Img1,
  Img2,
  Input,
  InputDiv,
  Link,
  SideImageCon,
  BtnDiv,
  BackHomeLinkDiv,
  Label,
} from './styled';
import companyLogo from '../../../assets/png/letgetstarted.png';
import Image1 from '../../../assets/png/Image1.png';
import Image2 from '../../../assets/png/Image3.png';
import Button from 'components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    validate: validate(validationSchema),
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
      // Navigate('/dashboard');
    },
  });

  return (
    <LoginContainer>
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
        <Col xs={15} sm={15} md={15} lg={15} className="col_style">
          <div className="align_item_center">
            <Img src={companyLogo} alt="company logo" />
          </div>
          <div className="form_container">
            <Form className="styled_form" onSubmit={formik.handleSubmit}>
              <h4>Forgot Password?</h4>
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

export default ForgotPassword;
