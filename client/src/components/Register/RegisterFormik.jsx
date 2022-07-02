import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import registerFormSchema from './schemaRegisterForm';

function RegisterFormik () {
  const startValues = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: registerFormSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(register(values));
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
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
      <TextField
         margin="normal"
         required
         fullWidth
         name="password2"
         label="Confirm password"
         type="password"
         id="password2"
         autoComplete="current-password"
         value={formik.values.password2}
         onChange={formik.handleChange}
         error={formik.touched.password2 && Boolean(formik.errors.password2)}
         helperText={formik.touched.password2 && formik.errors.password2}
       />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >Register
      </Button>
    </form>
  );
};

export default RegisterFormik;
