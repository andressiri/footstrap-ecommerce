import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createProduct,
  getBrands,
  getProductWithStock,
  updateProduct
} from '../../features/products/productsSlice';
import { useFormik } from 'formik';
import productFormSchema from './productFormSchema';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';

function ProductFormik () {
  const [startValues, setStartValues] = useState({
    name: '',
    description: '',
    price: '',
    brandId: '',
    gender: '',
    type: ''
  });
  const { brands, productStock } = useSelector((state) => state.products);
  const [imagePreview, setImagePreview] = useState('/logo512.png');
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  let productID = '';
  let buttonText = 'Create product';
  if (/update/.test(location.pathname)) {
    productID = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    buttonText = 'Update product';
  }

  useEffect(() => {
    dispatch(getBrands());
    if (/update/.test(location.pathname)) dispatch(getProductWithStock(productID));
  }, []);

  const formik = useFormik({
    initialValues: startValues,
    validationSchema: productFormSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {
      let auxPrice = values.price.replace(/\.$/, '');
      auxPrice = auxPrice.replace(/^0*/, '');
      if (!auxPrice || auxPrice.charAt(0) === '.') auxPrice = `0${auxPrice}`;
      values.price = auxPrice;
      if (/update/.test(location.pathname)) {
        dispatch(updateProduct({ id: productID, values }));
      } else {
        dispatch(createProduct(values));
      }
      setSubmitting(false);
    }
  });

  useEffect(() => {
    if (/update/.test(location.pathname)) {
      setImagePreview(productStock.image_url);
      const { name, description, price, brandId, gender, type } = productStock;
      setStartValues({ name: `${name}`, description: `${description}`, price: `${price}`, brandId: `${brandId}`, gender: `${gender}`, type: `${type}` });
      formik.resetForm({ values: startValues });
    }
  }, [productStock]);

  const handleUploadImage = () => inputFile.current.click();

  const handleFileUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        sessionStorage.setItem('file', fileReader.result);
        setImagePreview(fileReader.result);
        formik.setFieldValue('imageUploaded', true);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}>
      <input
        style={{ display: 'none' }}
        accept='image/*'
        ref={inputFile}
        onChange={handleFileUpload}
        type='file'
      />
      <Card
          id='imageCard'
          sx={{
            width: 300,
            m: 3,
            p: 2,
            borderWidth: '3px',
            borderColor: 'warning.light',
            borderStyle: 'solid',
            backgroundColor: '#eceff1'
          }}
      >
        <CardActionArea
          sx={{
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          onClick={handleUploadImage}
        >
          <CardMedia
            component='img'
            height='250'
            image={imagePreview}
            alt={'An image loaded'}
            sx={{
              objectFit: 'contain',
              borderWidth: '3px',
              borderColor: 'warning.light',
              borderStyle: 'solid',
              borderRadius: '4px',
              p: 2,
              mb: 2,
              backgroundColor: 'white'
            }}
          />
          <Button size='small' variant='contain' sx={{
            backgroundColor: 'secondary.main',
            ':hover': {
              backgroundColor: 'primary.main'
            }
          }}>
            Upload image
          </Button>
        </CardActionArea>
      </Card>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        multiline
        rows={3}
        margin="normal"
        required
        fullWidth
        id="description"
        label="Description"
        name="description"
        autoComplete="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="price"
        label="Price"
        name="price"
        autoComplete="price"
        value={formik.values.price}
        onChange={(e) => {
          if (e.target.value.match(/^[0-9]*$|^[0-9]+\.[0-9]{0,2}$/)) {
            formik.setFieldValue('price', e.target.value);
          }
        }}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="brandLabel">Brand</InputLabel>
        <Select
          required
          labelId="brandLabel"
          id="brandId"
          name="brandId"
          value={formik.values.brandId}
          label="Brand"
          onChange={formik.handleChange}
        >
          {brands.map((obj, i) => {
            return (
              <MenuItem
                key={`${obj.name}${i}`}
                value={obj.id}
              >
                {`${obj.id} - ${obj.name}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="genderLabel">Gender</InputLabel>
        <Select
          required
          labelId="genderLabel"
          id="gender"
          name="gender"
          value={formik.values.gender}
          label="Gender"
          onChange={formik.handleChange}
        >
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Genderless">Genderless</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
      </FormControl>
      <TextField
        margin="normal"
        required
        fullWidth
        id="type"
        label="Type"
        name="type"
        autoComplete="type"
        value={formik.values.type}
        onChange={formik.handleChange}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={formik.isSubmitting}
      >{buttonText}
      </Button>
    </form>
  );
};

export default ProductFormik;
