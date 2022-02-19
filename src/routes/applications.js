import StatusDetails from 'DashboardPages/Applications/Tab/StatusDetails';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Application = React.lazy(() => import('DashboardPages/Applications'));
const NewApplication = React.lazy(() => import('DashboardPages/Applications/NestedPage/NewApplication'));

const ApplicationsRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<Application />} />
      <Route path="/newapplication" element={<NewApplication />} />
      <Route path="/statusdetails/:id" element={<StatusDetails />} />
    </Routes>
  );
};

export default ApplicationsRoute;
