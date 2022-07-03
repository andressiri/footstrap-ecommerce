import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthReq } from '../features/auth/authSlice';
import { toast } from 'material-react-toastify';
import RegisterFormik from '../components/RegisterFormik';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Register () {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) {
      if (isSuccess) toast.success('Thanks for joining us!');

      if (user?.verified) {
        navigate('/');
      } else {
        // dispatch(requireVerification()); TODO
        navigate('/verification');
      };
    };

    dispatch(resetAuthReq());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleGoToLogin = () => navigate('/login');

  if (user) return (<></>);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Spinner />}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <RegisterFormik />
        <Link onClick={handleGoToLogin} variant="body2">
          Already registered? Go to login
        </Link>
      </Box>
    </Container>
  );
};

export default Register;
