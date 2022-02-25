import React, { Suspense, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Spin } from 'antd';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle';
import theme from 'theme';
import LandingPageLayout from 'layouts/LandingPageLayouts';
import HomePage from 'pages/Home';
import GalleryPage from 'pages/Gallery';
import ConatctPage from 'pages/contactUsPage';
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/AuthPage/RegisterPage';
import Login from 'pages/AuthPage/LoginPage';
import DashboardLayout from 'layouts/DashboardLayouts';
import Dashboard from 'routes';
import ForgotPassword from 'pages/AuthPage/ForgotPassword';
import RequireAuth from 'utils/requireAuth';
import { useDispatch } from 'react-redux';
import TermsLayout from 'layouts/TermsLayout';
import { getAllApplication, getUserProfile } from 'redux/slice/applicationDataSlice';
import PrivacyPolicy from 'pages/privacyPolicy';
import RequireToken from 'utils/requireToken';
import ResetPassword from 'pages/AuthPage/resetPassword';

function App() {
  const dispatch = useDispatch();

  const id = 1;

  useEffect(() => {
    dispatch(getAllApplication(id));
    dispatch(getUserProfile(id));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPageLayout>
              <Suspense
                fallback={
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                }
              >
                <HomePage />
              </Suspense>
            </LandingPageLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <LandingPageLayout>
              <Suspense
                fallback={
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                }
              >
                <GalleryPage />
              </Suspense>
            </LandingPageLayout>
          }
        />
        <Route
          path="/contactus"
          element={
            <LandingPageLayout>
              <Suspense
                fallback={
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                }
              >
                <ConatctPage />
              </Suspense>
            </LandingPageLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <TermsLayout>
              <PrivacyPolicy />
            </TermsLayout>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <TermsLayout>
              <ForgotPassword />
            </TermsLayout>
          }
        />
        <Route
          exact
          path="/reset/password"
          element={
            <TermsLayout>
              <RequireToken>
                <ResetPassword />
              </RequireToken>
            </TermsLayout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Suspense
                fallback={
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin />
                  </div>
                }
              >
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              </Suspense>
            </DashboardLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
