import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCode } from '../../../features/auth/authSlice';
import { useFormik } from 'formik';
import sendCodeSchema from './sendCodeSchema';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SendCodeFormik () {
  const { user } = useSelector((state) => state.auth);
  const startValues = {
    email: ''
  };
  const dispatch = useDispatch();

  if (user) startValues.email = user.email;

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: sendCodeSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(sendCode({ user, values }));
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {!user &&
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      }
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 0, mb: 2 }}
        disabled={formik.isSubmitting}
      >Send Code
      </Button>
    </form>
  );
};

export default SendCodeFormik;
