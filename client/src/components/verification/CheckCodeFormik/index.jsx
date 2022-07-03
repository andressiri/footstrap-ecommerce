import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCode } from '../../../features/auth/authSlice';
import { useFormik } from 'formik';
import checkCodeSchema from './checkCodeSchema';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CheckCodeFormik () {
  const { codeSent } = useSelector((state) => state.auth);
  const startValues = {
    code: ''
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: checkCodeSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(checkCode(values));
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        name="code"
        label="Code"
        type="text"
        id="code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.touched.code && Boolean(formik.errors.code)}
        helperText={formik.touched.code && formik.errors.code}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 0, mb: 2 }}
        disabled={formik.isSubmitting || !codeSent}
      >Check code
      </Button>
    </form>
  );
};

export default CheckCodeFormik;
