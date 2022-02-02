import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ApplicationsRoute from './applications';
import SettingsRoute from './settings';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/*" element={<ApplicationsRoute />} />
      <Route path="settings/*" element={<SettingsRoute />} />
    </Routes>
  );
};

export default Dashboard;
