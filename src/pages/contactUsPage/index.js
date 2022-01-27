import React, { useState } from 'react';
import { Col } from 'antd';
import Checkbox from 'components/Checkbox';

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

const ConatctPage = () => {
  const [value, setCheckbox] = useState(true);

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
                <Form>
                  <FormInputContainer>
                    <InputLabel>
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input type="text" id="fullname" name="full_name" placeholder="Enter full name" />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="fullname">Company Name</Label>
                      <Input type="text" id="company_name" name="company_name" placeholder="Enter company name" />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="phone_number">Phone Number</Label>
                      <Input type="text" id="phone_number" name="phone_number" placeholder="Enter phone number" />
                    </InputLabel>
                    <InputLabel>
                      <Label htmlFor="company_name">Company Name</Label>
                      <Input type="text" id="company_name" name="company_name" placeholder="Enter company name" />
                    </InputLabel>
                  </FormInputContainer>
                  <TextAreaDiv>
                    <Label htmlFor="fullname">Message</Label>
                    <StyledTextArea
                      rows="4"
                      type="text"
                      id="company_name"
                      name="company_name"
                      placeholder="Enter company name"
                    />
                  </TextAreaDiv>
                  <CheckboxBtn>
                    <Checkbox
                      label="Accept terms & conditions"
                      value={value}
                      checked={value}
                      onChange={({ target }) => setCheckbox(!value)}
                    />
                    <Button color="primary">Send Message</Button>
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
