import React from 'react';
import { Layout, Menu } from 'antd';
import { generatePath, useLocation } from 'react-router-dom';

import { Link } from './styled';
const { Sider } = Layout;

const ASide = () => {
  let path = generatePath('/dashboard');
  const location = useLocation();
  const pathName = location.pathname;
  const pathArray = pathName.split(path);

  // console.log(pathArray);

  const mainPath = pathArray[1];
  // console.log(mainPath);

  const mainPathSplit = mainPath.split('/');
  // console.log(mainPathSplit.length);

  return (
    <Sider width={269} className="site-layout-background" style={{ minHeight: 'calc(100vh - 64px)', marginTop: 64 }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${mainPathSplit.length === 1 ? 1 : mainPathSplit.length}`]}
        style={{ height: '100%', borderRight: 0, padding: '4rem 0 0 ' }}
      >
        <Menu.Item key="1">
          <Link to={`${path}`}>Application</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${path}/settings`}>Settings</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">Log Out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ASide;
