import React from 'react';
import { useDispatch } from 'react-redux';
import { login, setRemember } from '../../features/auth/authSlice';
import { useFormik } from 'formik';
import loginFormSchema from './schemaLoginForm';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

function LoginFormik () {
  const startValues = {
    email: '',
    password: '',
    remember: false
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: loginFormSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.remember) dispatch(setRemember());
      dispatch(login(values));
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <FormControlLabel
        control={<Checkbox
          color="primary"
          checked={formik.values.remember}
          onChange={() => formik.setFieldValue('remember', !formik.values.remember)}
          />}
          label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >Login
      </Button>
    </form>
  );
};

export default LoginFormik;
