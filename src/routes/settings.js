import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

const SettingsPage = React.lazy(() => import('DashboardPages/Settings'));

const SettingsRoute = () => {
  const { userProfile } = useSelector((state) => state.application);
  const { data } = userProfile;

  return (
    <Routes>
      <Route exact path="/" element={<SettingsPage data={data ? data : null} />} />
    </Routes>
  );
};

export default SettingsRoute;
