import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from './styled';
const { Sider } = Layout;

const ASide = () => {
  return (
    <Sider width={269} className="site-layout-background" style={{ minHeight: 'calc(100vh - 64px)', marginTop: 64 }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0, padding: '4rem 0 0 ' }}
      >
        <Menu.Item key="1">
          <Link to="/dashboard">Application</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">Settings</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">Log Out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ASide;
