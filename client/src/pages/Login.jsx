import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'material-react-toastify';
import { resetAuthReq, requirePasswordChange, requireVerification } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginFormik from '../components/LoginFormik';

function Login () {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      toast.success('You are now logged in');
    };

    if (user) {
      if (user.verified) {
        navigate('/');
      } else {
        dispatch(requireVerification());
        navigate('/verification');
      };
    };

    dispatch(resetAuthReq());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleGoToRegister = () => navigate('/register');

  const handleForgotPassword = () => {
    dispatch(requirePasswordChange());
    navigate('/verification');
  };

  if (user) return (<div style={{ width: '1px', height: '1px' }} />);

  return (
    <Container component="main" maxWidth="xs" >
      {isLoading && <Spinner />}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        p: { xs: 2, sm: 7 },
        borderRadius: 2,
        borderWidth: '3px',
        borderColor: 'warning.light',
        borderStyle: 'solid'
      }} >
        <Avatar sx={{ mb: 1, mt: { xs: 0, sm: -2 }, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginFormik />
        <Link onClick={handleForgotPassword} variant="body2" sx={{ cursor: 'pointer' }} >
          Forgot password?
        </Link>
        <Link onClick={handleGoToRegister} variant="body2" sx={{ cursor: 'pointer' }} >
          Don&apos;t have an account? Register
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
