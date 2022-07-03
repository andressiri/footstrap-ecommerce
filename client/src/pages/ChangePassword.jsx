import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useLogout from '../helpers/useLogout';
import { toast } from 'material-react-toastify';
import { resetAuthReq, resetToken } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ChangePasswordFormik from '../components/ChangePasswordFormik';

function ChangePassword () {
  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message,
    temporaryToken
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = useLogout();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      toast.success(message);
      logout();
      navigate('/login');
    };

    if (!temporaryToken) navigate('/');

    dispatch(resetAuthReq());
  }, [isError, isSuccess, message, temporaryToken, navigate, dispatch, logout]);

  const handleGoToLogin = () => {
    if (!user) {
      logout();
    } else {
      dispatch(resetToken());
      navigate('/login');
    };
  };

  if (!temporaryToken) return (<></>);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Spinner />}
      <Box sx={{
        marginTop: 8,
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
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change password
        </Typography>
        <ChangePasswordFormik />
        <Link onClick={handleGoToLogin} variant="body2" sx={{ cursor: 'pointer' }} >
          Cancel
        </Link>
      </Box>
    </Container>
  );
};

export default ChangePassword;
