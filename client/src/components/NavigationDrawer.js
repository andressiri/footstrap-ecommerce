import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeDrawer } from '../features/muiComponents/muiComponentsSlice';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

function NavigationDrawer () {
  const { openDrawer } = useSelector((state) => state.muiComponents);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const arrayToDisplay = [{
    text: 'Register',
    icon: <AccountCircleIcon />,
    onClick: handleRegister
  }, {
    text: 'Login',
    icon: <LoginIcon />,
    onClick: handleLogin
  }
  ];

  return (
    <Drawer
      anchor={'right'}
      open={openDrawer}
      onClose={toggleDrawer()}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          {arrayToDisplay.map((obj) => (
            <ListItem button onClick={obj.onClick} key={obj.text}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
