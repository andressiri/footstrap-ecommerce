import * as Yup from 'yup';
const invalidEmail = 'Please enter a valid email';
const emailRequired = 'Please enter an email';
const passwordRequired = 'Please enter a password';
const password2Required = 'Please confirm your password';
const passwordLength = 'Password must have at least 6 characters';
const passwordsMustMatch = 'Passwords don\'t match';

const registerFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  email: Yup.string().email(invalidEmail).required(emailRequired),
  password: Yup.string().min(6, passwordLength).required(passwordRequired),
  password2: Yup.string()
    .min(6, passwordLength)
    .required(password2Required)
    .oneOf([Yup.ref('password'), null], passwordsMustMatch)
});

export default registerFormSchema;
