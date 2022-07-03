import React from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../features/auth/authSlice';
import { useFormik } from 'formik';
import changePasswordSchema from './changePasswordSchema';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ChangePasswordFormik () {
  const startValues = {
    password: '',
    confirmPassword: ''
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: changePasswordSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(changePassword(values));
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm password"
        type="password"
        id="confirmPassword"
        autoComplete="current-password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >Change password
      </Button>
    </form>
  );
};

export default ChangePasswordFormik;
