import * as Yup from 'yup';

const changeNameSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a new name')
});

export default changeNameSchema;
