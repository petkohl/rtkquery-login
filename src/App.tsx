import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../src/components/routing/PrivateRoute';
import React from 'react';
import RegisterApplicant from '../src/components/auth/RegisterApplicant';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RegisterApplicant />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About me</h2>
      </main>
    </>
  );
}

export default App;
