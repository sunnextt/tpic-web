import React from 'react';
import { Col } from 'antd';
import Checkbox from 'components/Checkbox';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import CUContainer, {
  Button,
  CheckboxBtn,
  ContactuHeadling,
  ContactUsContentDiv,
  Form,
  FormInputContainer,
  Input,
  Label,
  Row,
  StyledTextArea,
  TextAreaDiv,
  InputLabel,
} from './styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ConatctPage = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    company_name: Yup.string().required('Company name is required'),
    message: Yup.string().required('Your need to enter your message'),
    phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      company_name: '',
      phone_number: '',
      email: '',
      message: '',
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <CUContainer>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
          <ContactuHeadling>
            <h4>Feel free to contact us</h4>
          </ContactuHeadling>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <ContactUsContentDiv>
            <h5>Send us a message</h5>
            <Row>
              <Col span={24}>
                <Form onSubmit={formik.handleSubmit}>
                  <FormInputContainer>
                    <InputLabel>
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.fullname}
                        id="fullname"
                        name="fullname"
                        placeholder="Enter full name"
                      />
                      <div className="text-danger">{formik.errors.fullname ? formik.errors.fullname : null}</div>
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                      />
                      <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="phone_number">Phone Number</Label>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number}
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter phone number"
                      />
                      <div className="text-danger">
                        {formik.errors.phone_number ? formik.errors.phone_number : null}
                      </div>
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="company_name">Company Name</Label>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.company_name}
                        id="company_name"
                        name="company_name"
                        placeholder="Enter company name"
                      />
                      <div className="text-danger">
                        {formik.errors.company_name ? formik.errors.company_name : null}
                      </div>
                    </InputLabel>
                  </FormInputContainer>
                  <TextAreaDiv>
                    <Label htmlFor="message">Message</Label>
                    <StyledTextArea
                      rows="4"
                      type="text"
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      placeholder="Dear Sir/Madam"
                    />
                    <div className="text-danger">{formik.errors.message ? formik.errors.message : null}</div>
                  </TextAreaDiv>
                  <CheckboxBtn>
                    <div>
                      <Checkbox
                        name="acceptTerms"
                        label="Accept terms & conditions"
                        onChange={formik.handleChange}
                        value={formik.values.acceptTerms}
                      />
                      <div className="text-danger">{formik.errors.acceptTerms ? formik.errors.acceptTerms : null}</div>
                    </div>
                    <Button type="submit" color="primary">
                      Send Message
                    </Button>
                  </CheckboxBtn>
                </Form>
              </Col>
            </Row>
          </ContactUsContentDiv>
        </Col>
      </Row>
    </CUContainer>
  );
};

export default ConatctPage;
