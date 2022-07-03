import * as Yup from 'yup';
const invalidEmail = 'Please enter a valid email';
const emailRequired = 'Please enter an email';
const passwordRequired = 'Please enter a password';
const passwordLength = 'Password must have at least 6 characters';

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email(invalidEmail).required(emailRequired),
  password: Yup.string().min(6, passwordLength).required(passwordRequired)
});

export default loginFormSchema;
