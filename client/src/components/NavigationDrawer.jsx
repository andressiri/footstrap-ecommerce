import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeDrawer, changeDeleteAccount } from '../features/muiComponents/muiComponentsSlice';
import { requirePasswordChange } from '../features/auth/authSlice';
import useLogout from '../helpers/useLogout';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddTaskIcon from '@mui/icons-material/AddTask';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PasswordIcon from '@mui/icons-material/Password';
import NavigationDrawerList from './NavigationDrawerList';

function NavigationDrawer () {
  const { user } = useSelector((state) => state.auth);
  const { openDrawer } = useSelector((state) => state.muiComponents);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = useLogout();

  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    };
    dispatch(changeDrawer());
  };

  const handleLogin = () => navigate('/login');

  const handleRegister = () => navigate('/register');

  const handleChangeName = () => navigate('/name');

  const handleChangePassword = () => {
    dispatch(requirePasswordChange());
    navigate('/verification');
  };

  const handleLogout = () => logout();

  const handleDeleteAccount = () => dispatch(changeDeleteAccount());

  const handleCreateProduct = () => navigate('/products/create');

  const handleUpdateProduct = () => navigate('/products/update');

  const handleDeleteProduct = () => navigate('/products/delete');

  const handleUpdateStock = () => navigate('/products/stock');

  let adminArray = [];
  let arrayToDisplay = [{
    text: 'Change name',
    icon: <FaceIcon />,
    onClick: handleChangeName
  }, {
    text: 'Change password',
    icon: <PasswordIcon />,
    onClick: handleChangePassword
  }, {
    text: 'Logout',
    icon: <LogoutIcon />,
    onClick: handleLogout
  }, {
    text: 'Delete account',
    icon: <NoAccountsIcon />,
    onClick: handleDeleteAccount
  }];

  if (!user) {
    arrayToDisplay = [{
      text: 'Register',
      icon: <AccountCircleIcon />,
      onClick: handleRegister
    }, {
      text: 'Login',
      icon: <LoginIcon />,
      onClick: handleLogin
    }];
  }

  if (user?.roleId === 2) {
    arrayToDisplay.pop();
    adminArray = [{
      text: 'Create product',
      icon: <AddBusinessIcon />,
      onClick: handleCreateProduct
    }, {
      text: 'Update product',
      icon: <BorderColorIcon />,
      onClick: handleUpdateProduct
    }, {
      text: 'Delete product',
      icon: <DeleteForeverIcon />,
      onClick: handleDeleteProduct
    }, {
      text: 'Update stock',
      icon: <AddTaskIcon />,
      onClick: handleUpdateStock
    }
    ];
  }

  return (
    <Drawer
      anchor={'right'}
      open={openDrawer}
      onClose={toggleDrawer()}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 250,
          backgroundColor: 'primary.main',
          height: '100vh',
          borderLeftColor: 'warning.light',
          borderLeftWidth: '2px',
          borderLeftStyle: 'solid'
        }}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        {user &&
          <Typography
          variant="h6"
          sx={{ color: 'warning.light', mt: 3 }}
          >{user.name}
          </Typography>
        }
        <NavigationDrawerList fromParent={{ array: arrayToDisplay }} />
        {user?.roleId === 2 &&
          <>
            <Divider sx={{
              width: '220px',
              borderColor: 'warning.light',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderRadius: '50%'
            }} />
            <NavigationDrawerList fromParent={{ array: adminArray }} />
          </>

        }
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
