import React, { useState } from 'react';
import MainLayout from './styled';
import { Layout } from 'antd';
import ASide from './Sider';
import TopHeader from './Header.js';
import { useMediaQuery } from 'usehooks-ts';
const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  const matches = useMediaQuery('(max-width: 960px)');

  const [collapsed, setCollapsed] = useState(false);

  const [Breakpoint, setBreakpoint] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const onBreakpoint = (broken) => {
    setBreakpoint(broken);
  };
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <MainLayout className="dashboard_MainLayout">
      <TopHeader toggle={toggle} collapsed={collapsed} Breakpoint={Breakpoint} />
      <Layout style={{ height: '100%' }}>
        <ASide collapsed={collapsed} onBreakpoint={onBreakpoint} onCollapse={onCollapse} />
        <Layout style={{ padding: '0 24px 0', background: '#F4F4F4', height: '100%', minWidth: '460px', width: '100%' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: matches ? '100px 0rem' : '100px 3rem',
              margin: 0,
              minHeight: '100vh',
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
