import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeDrawer } from '../features/muiComponents/muiComponentsSlice';
import useLogout from '../helpers/useLogout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar () {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = useLogout();

  const handleGoToDashboard = () => navigate('/');

  const handleGoToProducts = () => navigate('/products');

  const handleGoToLogin = () => navigate('/login');

  const handleGoToRegister = () => navigate('/register');

  const handleChangeDrawer = () => dispatch(changeDrawer());

  const handleLogout = () => logout();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        flexGrow: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'warning.light',
        borderBottomWidth: '2px'
      }}>
        <Toolbar>
          <Box sx={{
            minHeight: '64px',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }} >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: -2 }}
              onClick={handleGoToDashboard}
              >
              <img width="50px" src="icon.png" alt="footstrap logo" />
            </IconButton>
            <Button
              onClick={handleGoToDashboard}
              sx={{ color: 'black', fontSize: '1.5rem', display: { xs: 'none', sm: 'flex' } }}
              >Footstrap
            </Button>
          </Box>
          <Button onClick={handleGoToProducts} sx={{ color: 'warning.light' }}>
            Products
          </Button>
          {user
            ? <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
            : location.pathname === '/login'
              ? <Button onClick={handleGoToRegister} color="inherit">
                Register
              </Button>
              : <Button onClick={handleGoToLogin} color="inherit">
                Login
              </Button>
          }
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleChangeDrawer}
          ><MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
