import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

function App () {
  const location = useLocation();

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

  const transitions = useTransition(location, {
    from: { opacity: 0, duration: 100 },
    enter: { opacity: 1, duration: 200 },
    leave: { opacity: 0 },
    exitBeforeEnter: true
  });

  return (
    <ThemeProvider theme={theme} >
      {transitions((props, item) => {
        return <animated.div style={props}>
          <Routes location={item}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </animated.div>;
      })}
    </ThemeProvider>
  );
}

export default App;
