import * as Yup from 'yup';
const codeRequired = 'Please enter the code sent';

const checkCodeSchema = Yup.object().shape({
  code: Yup.string().required(codeRequired)
});

export default checkCodeSchema;
