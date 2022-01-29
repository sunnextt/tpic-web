import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ApplicationsRoute from './applications';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/*" element={<ApplicationsRoute />} />
    </Routes>
  );
};

export default Dashboard;
