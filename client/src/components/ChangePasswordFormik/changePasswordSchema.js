import * as Yup from 'yup';
const passwordRequired = 'Please enter a password';
const confirmPasswordRequired = 'Please confirm your password';
const passwordLength = 'Password must have at least 6 characters';
const passwordsMustMatch = 'Passwords don\'t match';

const changePasswordSchema = Yup.object().shape({
  password: Yup.string().min(6, passwordLength).required(passwordRequired),
  confirmPassword: Yup.string()
    .min(6, passwordLength)
    .required(confirmPasswordRequired)
    .oneOf([Yup.ref('password'), null], passwordsMustMatch)
});

export default changePasswordSchema;
