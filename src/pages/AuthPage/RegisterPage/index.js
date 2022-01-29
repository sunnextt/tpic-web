import { Col, Row } from 'antd';
import React, { useState } from 'react';
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

const Register = () => {
  const [value, setCheckbox] = useState(true);

  return (
    <RegisterContainer>
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
                <Form className="styled_form">
                  <h4>Create an account</h4>
                  <InputDiv>
                    <InputLabel>
                      <Label htmlFor="fullname">First Name</Label>
                      <Input name="first_name" placeholder="Enter your first name" required />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Last Name</Label>
                      <Input name="last_name" placeholder="Enter your last name" required />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Email Address</Label>
                      <Input name="email" placeholder="Enter your email" required />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Phone Number</Label>
                      <Input name="phone_number" placeholder="Enter a valid phone number" required />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Password</Label>
                      <Input name="password" placeholder="Enter password" required />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Comfirm Password</Label>
                      <Input name="comfirm_password" placeholder="Retype password" required />
                    </InputLabel>
                  </InputDiv>
                  <CheckboxDiv>
                    <Checkbox
                      path="/terms"
                      link=" terms & conditions"
                      label="Accept"
                      value={value}
                      checked={value}
                      onChange={({ target }) => setCheckbox(!value)}
                    />
                    <BtnDiv>
                      <Button color="primary">Create Account</Button>
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
    </RegisterContainer>
  );
};

export default Register;
