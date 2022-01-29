import React from 'react';
import MainLayout from './styled';
import { Layout } from 'antd';
import ASide from './Sider';
import TopHeader from './Header.js';
const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <MainLayout className="dashboard_MainLayout">
      <TopHeader />
      <Layout style={{ height: '100%' }}>
        <ASide />
        <Layout style={{ padding: '0 24px 0', background: '#e5e5e5', height: '100%' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: '100px 3rem',
              margin: 0,
              minHeight: 280,
              height: '100%',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </MainLayout>
  );
};

export default DashboardLayout;
