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
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import ChangeNameFormik from '../components/ChangeNameFormik';

function ChangeName () {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      toast.success(message);
      navigate('/');
    };

    if (!user) navigate('/');

    dispatch(resetAuthReq());
  }, [isError, isSuccess, message, user, navigate, dispatch]);

  const handleCancel = () => navigate('/login');

  if (!user) return (<></>);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Spinner />}
      <CssBaseline />
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
          <FaceIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change name
        </Typography>
        <ChangeNameFormik />
        <Link onClick={handleCancel} variant="body2" sx={{ cursor: 'pointer' }} >
          Cancel
        </Link>
      </Box>
    </Container>
  );
};

export default ChangeName;
