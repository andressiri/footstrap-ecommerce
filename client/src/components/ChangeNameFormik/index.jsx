import React from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../../features/auth/authSlice';
import { useFormik } from 'formik';
import changeNameSchema from './changeNameSchema';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ChangeNameFormik () {
  const startValues = {
    name: ''
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: changeNameSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(changeName(values));
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >Change name
      </Button>
    </form>
  );
};

export default ChangeNameFormik;
