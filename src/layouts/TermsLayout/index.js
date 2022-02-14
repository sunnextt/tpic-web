import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Layout, { ContentContent } from './styled';

const TermsLayout = ({ children }) => {
  return (
    <Layout className="dashboard_layout">
      <Header />
      <ContentContent>{children}</ContentContent>
      <Footer/>
    </Layout>
  );
};

export default TermsLayout;
