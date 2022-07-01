import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7b4bf3'
    },
    secondary: {
      main: '#f943de'
    }
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

function App () {
  return (
    <ThemeProvider theme={theme} >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' />} />z
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
