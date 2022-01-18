import React from 'react';
import Header from './Header';
import Layout, { ContentContent } from './styled';

const LandingPageLayout = ({ children }) => {
  return (
    <Layout className="dashboard_layout">
      <Header />
      <ContentContent>{children}</ContentContent>
    </Layout>
  );
};

export default LandingPageLayout;
