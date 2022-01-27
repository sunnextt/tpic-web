import React from 'react';
import NewsLetterWrapper, { Button, Form, Input, NewsHeader } from './styled';

const NewsLetter = () => {
  return (
    <NewsLetterWrapper>
      <NewsHeader>
        <h5>Don’t miss our weekly updates about opportunities</h5>
      </NewsHeader>
      <div className="Subscribe">
        <Form>
          <Input name="newsletter" value="" placeholder="Enter your email address..." />
          <Button>Subscribe</Button>
        </Form>
      </div>
    </NewsLetterWrapper>
  );
};

export default NewsLetter;
