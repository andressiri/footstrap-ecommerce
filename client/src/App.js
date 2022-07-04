import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';
import { useBeforeunload } from 'react-beforeunload';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import DelAccConfirm from './components/deleteAccount/DelAccConfirm';
import DeleteAccount from './components/deleteAccount/DeleteAccount';
import PasswordToDelete from './components/deleteAccount/PasswordToDelete';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import NavigationDrawer from './components/NavigationDrawer';
import Verification from './pages/Verification';
import ChangePassword from './pages/ChangePassword';
import ChangeName from './pages/ChangeName';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App () {
  const { remember } = useSelector((state) => state.auth);
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

  useBeforeunload(() => {
    if (remember) return;

    localStorage.removeItem('user');
  });

  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      <NavigationDrawer />
      <ToastContainer />
      <DeleteAccount />
      <DelAccConfirm />
      <div style={{
        background: 'linear-gradient(300deg, rgb(224, 45, 126), rgb(152, 115, 231)) 0% 0% / 120% 120%',
        width: '100%',
        minHeight: '100vh'
      }} >
        {transitions((props, item) => {
          return <animated.div style={{
            ...props,
            background: 'linear-gradient(300deg, rgb(224, 45, 126), rgb(152, 115, 231)) 0% 0% / 120% 120%',
            width: '100%',
            minHeight: '100vh',
            paddingTop: '110px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <CssBaseline />
            <Routes location={item}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/not-found' />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/verification' element={<Verification />} />
              <Route path='/password' element={<ChangePassword />} />
              <Route path='/name' element={<ChangeName />} />
              <Route path='/delete-account' element={<PasswordToDelete />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/product/*' element={<ProductDetail />} />
            </Routes>
            <Footer />
          </animated.div>;
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
