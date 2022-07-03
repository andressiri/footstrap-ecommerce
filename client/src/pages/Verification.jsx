import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'material-react-toastify';
import { resetAuthReq, changeVerificationStatus } from '../features/auth/authSlice';
import { changeDelAccConfirm } from '../features/muiComponents/muiComponentsSlice';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MailLockIcon from '@mui/icons-material/MailLock';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SendCodeFormik from '../components/verification/SendCodeFormik';
import CheckCodeFormik from '../components/verification/CheckCodeFormik';

function Verification () {
  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message,
    temporaryToken,
    userVerificationRequired,
    passwordChangeRequired,
    accountDeleteRequired,
    codeSent
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) {
      toast.success(message);

      if (message === 'Code is correct, email verified') {
        if (passwordChangeRequired) {
          navigate('/password');
        } else if (accountDeleteRequired) {
          dispatch(changeDelAccConfirm());
        } else {
          dispatch(changeVerificationStatus());
          navigate('/');
        };
      };
    };

    if (!userVerificationRequired && !accountDeleteRequired && !passwordChangeRequired) {
      navigate('/');
    }

    dispatch(resetAuthReq());
  }, [
    isError,
    isSuccess,
    message,
    temporaryToken,
    userVerificationRequired,
    passwordChangeRequired,
    accountDeleteRequired,
    navigate,
    dispatch
  ]);

  const handleGoToLogin = () => navigate('/login');

  if (
    !userVerificationRequired &&
    !accountDeleteRequired &&
    !passwordChangeRequired
  ) return (<></>);

  return (
    <Container component="main" maxWidth="xs">
      {isLoading && <Spinner />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          p: { xs: 2, sm: 7 },
          borderRadius: 2,
          borderWidth: '3px',
          borderColor: 'warning.light',
          borderStyle: 'solid'
        }}
      >
        <Avatar sx={{ mb: 1, mt: { xs: 0, sm: -2 }, bgcolor: 'secondary.main' }}>
          {codeSent ? <MarkEmailUnreadIcon /> : <MailLockIcon />}
        </Avatar>
        <Typography component="h1" variant="h5">
          Identity verification
        </Typography>
        <SendCodeFormik />
        <CheckCodeFormik />
        {!user &&
          <Link onClick={handleGoToLogin} variant="body2" sx={{ mt: 2, cursor: 'pointer' }} >
            Remebered? Cancel
          </Link>
        }
      </Box>
    </Container>
  );
};

export default Verification;
