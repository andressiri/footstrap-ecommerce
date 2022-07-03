import * as Yup from 'yup';
const invalidEmail = 'Please enter a valid email';
const emailRequired = 'Please enter an email';

const sendCodeSchema = Yup.object().shape({
  email: Yup.string().email(invalidEmail).required(emailRequired)
});

export default sendCodeSchema;
