import React from 'react';
import NewsLetterWrapper, { Button, Form, Input, NewsHeader } from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewsLetter = () => {
  const validationSchema = Yup.object().shape({
    newsletter: Yup.string().required('Enter your email address'),
  });

  const formik = useFormik({
    initialValues: {
      newsletter: '',
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <NewsLetterWrapper>
      <NewsHeader>
        <h5>Don’t miss our weekly updates about opportunities</h5>
      </NewsHeader>
      <div className="Subscribe">
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="newsletter"
              onChange={formik.handleChange}
              value={formik.values.newsletter}
              placeholder="Enter your email address..."
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </Form>
      </div>
      <div className="error-danger">{formik.errors.newsletter ? formik.errors.newsletter : null}</div>
    </NewsLetterWrapper>
  );
};

export default NewsLetter;
