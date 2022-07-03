import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'material-react-toastify';
import { resetAuthReq } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
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
        // dispatch(requireVerification()); TODO
        navigate('/verification');
      };
    };

    dispatch(resetAuthReq());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  /// const onRememberChange = (event) => {
  ///   setFormData((prevState) => ({
  ///     ...prevState,
  ///     remember: event.target.checked
  ///   }));
  /// };

  const handleGoToRegister = () => navigate('/register');

  const handleForgotPassword = () => {
    // dispatch(requirePasswordChange()); TODO
    navigate('/verification');
  };

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginFormik />
        <Grid container>
          <Grid item xs>
            <Link onClick={handleForgotPassword} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={handleGoToRegister} variant="body2">
              Don&apos;t have an account? Register
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
