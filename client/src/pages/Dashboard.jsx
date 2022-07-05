import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetProductsReq, getProducts, refreshProductsShown } from '../features/products/productsSlice';
import { toast } from 'material-react-toastify';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImagesList from '../components/ImagesList';

function Dashboard () {
  const { products, isError, isSuccess, message } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products[0]) dispatch(getProducts());
    dispatch(refreshProductsShown(10));
  }, []);

  useEffect(() => {
    if (isError) toast.error(message);

    dispatch(resetProductsReq());
  }, [isError, isSuccess, message]);

  const firstArray = [];
  const secondArray = Array.isArray(products)
    ? products.filter((prod) => {
      if ([1, 3, 5].includes(prod.brandId)) {
        firstArray.push(prod);
        return false;
      }
      return prod;
    })
    : [];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box
      maxWidth="lg"
      sx={{
        backgroundColor: 'warning.light',
        m: 5,
        mt: 0,
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        borderRadius: '15px',
        objectFit: 'contained',
        width: '90%'
      }}>
        <Typography variant='h4' color="primary" >Welcome to Footstrap!</Typography>
        <Typography variant='h4' sx={{ color: 'red', fontWeight: 'bolder' }} >Check our members offers!</Typography>
      </Box>
      <Box
      maxWidth="lg"
       sx={{
         width: '90%',
         display: 'flex',
         flexWrap: 'wrap',
         alignItems: 'center',
         justifyContent: 'center',
         background: 'white',
         p: { xs: 2, sm: 4 },
         borderRadius: 2,
         borderWidth: '3px',
         borderColor: 'warning.light',
         borderStyle: 'solid'
       }} >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/adidas_logo.png'
            style={{ width: '100%' }}
            alt='Adidas logo'
           />
            </Box>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/puma_logo.png'
            style={{ width: '100%' }}
            alt='Puma logo'
           />
            </Box>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/converse_logo.png'
            style={{ width: '100%' }}
            alt='Converse logo'
           />
            </Box>
          </Box>
          <ImagesList fromParent={{ array: firstArray }} />
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/nike_logo.png'
            style={{ width: '100%' }}
            alt='Nike logo'
           />
            </Box>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/brands/reebok_logo.png'
            style={{ width: '100%' }}
            alt='Reebok logo'
           />
            </Box>
            <Box sx={{ width: { xs: '30%', sm: '120px' } }}>
              <img src='/logo512.png'
            style={{ width: '100%' }}
            alt='Footstrap logo'
           />
            </Box>
          </Box>
          <ImagesList fromParent={{ array: secondArray }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
