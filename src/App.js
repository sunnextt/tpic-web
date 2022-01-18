import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Spin } from 'antd';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle';
import theme from 'theme';
import LandingPageLayout from 'layouts/LandingPageLayouts';
import HomePage from 'pages/Home';

function App() {
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
