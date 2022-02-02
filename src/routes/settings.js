import React from 'react';
import { Routes, Route } from 'react-router-dom';

const SettingsPage = React.lazy(() => import('DashboardPages/Settings'));

const SettingsRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SettingsPage />} />
    </Routes>
  );
};

export default SettingsRoute;
