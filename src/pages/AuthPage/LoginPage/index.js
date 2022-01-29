import { Col, Row } from 'antd';
import React, { useState } from 'react';
import LoginContainer, {
  Form,
  Img,
  Img1,
  Img2,
  Input,
  InputDiv,
  InputLabel,
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

const Login = () => {
  const [value, setCheckbox] = useState(true);

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/dashboard');
  };

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
        <Col xs={15} sm={15} md={15} lg={15} style={{ padding: '3rem 5rem 5rem' }}>
          <div className="align_item_center">
            <Img src={companyLogo} alt="company logo" />
          </div>
          <div className="form_container">
            <Form className="styled_form">
              <h4>Create an account</h4>
              <InputDiv>
                <Input name="email" placeholder="Enter Email address" required />
                <Input name="password" placeholder="Password" required />
              </InputDiv>
              <div className="flex_space_btw">
                <Checkbox
                  label="Remember Me"
                  value={value}
                  checked={value}
                  onChange={({ target }) => setCheckbox(!value)}
                />
                <div>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </div>
              </div>
              <BtnDiv>
                <Button color="primary" width="fullWidth" onClick={handleClick}>
                  Login to Continue
                </Button>
              </BtnDiv>
              <LinkToSignin>
                <h6>
                  Don’t have an account ?<Link to="/register"> Register</Link>
                </h6>
              </LinkToSignin>
            </Form>
          </div>
        </Col>
      </Row>
    </LoginContainer>
  );
};

export default Login;
