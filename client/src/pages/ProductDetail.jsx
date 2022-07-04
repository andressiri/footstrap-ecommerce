import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductWithStock,
  resetProductStock,
  getBrand,
  deleteProduct
} from '../features/products/productsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function ProductDetail () {
  const [stockArray, setStockArray] = useState([]);
  const { user } = useSelector(state => state.auth);
  const { productStock, productStockBrand } = useSelector(state => state.products);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const getStockArray = () => {
    const arr = [];
    for (const key in productStock.stock) {
      if (key.startsWith('s')) arr.push({ [key]: productStock.stock[key] });
    }
    return arr;
  };

  useEffect(() => {
    dispatch(getProductWithStock(location.pathname.substring(location.pathname.lastIndexOf('/') + 1)));
  }, []);

  useEffect(() => {
    return () => { dispatch(resetProductStock()); };
  }, []);

  // For some reason I can't figure out, the brand object inside productStock is not accesible - TODO
  // Guess it is related to how the endpoint sends data using associations - keywords: <anonymus>
  useEffect(() => {
    if (productStock?.brandId) dispatch(getBrand(productStock.brandId));
    const arr = getStockArray();
    setStockArray(arr);
  }, [productStock]);

  if (!productStock.image_url || !productStockBrand.logo_url) return (<div style={{ width: '1px', height: '1px' }} />);

  return (
    <Container component="main" maxWidth="lg" >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        background: 'white',
        p: { xs: 2, sm: 7 },
        borderRadius: 2,
        borderWidth: '3px',
        borderColor: 'warning.light',
        borderStyle: 'solid'
      }} >
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{ width: '192px', my: -5 }}>
            <img
            src={productStockBrand.logo_url}
            alt={`${productStockBrand.name} logo`}
            style={{ objectFit: 'contained', maxWidth: '100%' }}
          />
          </Box>
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontSize: { xs: '2.5em', sm: '4em' }, color: 'secondary.main', m: 3 }}>
            {productStock.name}
          </Typography>
        </Box>
        <Box sx={{ width: '80%', m: 5 }}>
          <img
            src={productStock.image_url}
            alt={`A picture of ${productStock.image} shoe`}
            style={{ objectFit: 'contained', maxWidth: '75%' }}
          />
        </Box>
        <Typography component="h3" variant="h3" sx={{ color: 'primary.main', m: 3 }}>
          ${productStock.price}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left'
        }} >
          <Typography
            component="h4"
            variant="h4"
            sx={{ fontWeight: 'medium', textDecoration: 'underline' }}
          >
            Product description
          </Typography>
          <Typography component="h6" variant="h6" sx={{ color: 'primary.main' }} >
            Brand: {productStockBrand.name}
          </Typography>
          <Typography component="h6" variant="h6" sx={{ color: 'primary.main' }} >
            Gender: {productStock.gender}
          </Typography>
          <Typography component="h6" variant="h6" sx={{ color: 'primary.main' }} >
            Type: {productStock.type}
          </Typography>
          <Typography component="h6" variant="h6">
            {productStock.description}
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            sx={{ fontWeight: 'medium', textDecoration: 'underline', mt: 3 }}
          >
            Stock available
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {stockArray.map((obj, i) => {
              const backgroundColor = obj[Object.keys(obj)[0]] > 0 ? 'secondary.main' : '#eceff1';
              return <Box
            key={i}
            sx={{
              width: '50px',
              height: '40px',
              backgroundColor,
              color: 'white',
              margin: 2,
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
              >{Object.getOwnPropertyNames(obj)[0]}</Box>;
            })}
          </Box>
          { user?.roleId === 2 && /delete/.test(location.pathname) &&
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'error.light', ':hover': { backgroundColor: 'red' } }}
              onClick={() => {
                dispatch(deleteProduct(location.pathname.substring(location.pathname.lastIndexOf('/') + 1)));
                navigate('/products/delete');
              }}
            >Delete product
            </Button>
          }
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetail;
