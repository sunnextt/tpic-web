import React, { useCallback, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { generatePath, useLocation } from 'react-router-dom';

import { Link } from './styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/slice/AuthSlice';
import eventBus from 'utils/common/EventBus';
const { Sider } = Layout;

const ASide = () => {
  let path = generatePath('/dashboard');
  const location = useLocation();
  const pathName = location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
    // Navigate('/login');
    window.location.reload();
  }, [dispatch]);

  useEffect(() => {
    eventBus.on('logout', () => {
      logOut();
    });

    return () => {
      eventBus.remove('logout');
    };
  }, [logOut]);

  return (
    <Sider width={269} className="site-layout-background" style={{ minHeight: 'calc(100vh - 64px)', marginTop: 64 }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${mainPathSplit.length === 1 ? 1 : 2}`]}
        style={{ height: '100%', borderRight: 0, padding: '4rem 0 0 ' }}
      >
        <Menu.Item key="1">
          <Link to={`${path}`}>Application</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${path}/settings`}>Settings</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login" onClick={logOut}>
            Log Out
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ASide;
