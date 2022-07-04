import * as Yup from 'yup';

const productFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  description: Yup.string().required('Please enter a description'),
  price: Yup.number('Price should be a number').required('Please enter a price'),
  brandId: Yup.number('There was an error loading brand').required('Please select a brand'),
  gender: Yup.string().required('Please select a gender'),
  type: Yup.string().required('Please enter a type')
});

export default productFormSchema;
