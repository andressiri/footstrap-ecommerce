import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'material-react-toastify';
import { resetProductsReq } from '../features/products/productsSlice';
import Spinner from '../components/Spinner';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ProductFormik from '../components/ProductFormik';

function CreateProduct () {
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.products);
  const { user } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || user.roleId !== 2) {
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess && message) {
      toast.success(message);
      navigate('/products/create');
    }

    dispatch(resetProductsReq());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleGoToHome = () => navigate('/');

  if (!user || user.roleId !== 2) return (<div style={{ width: '1px', height: '1px' }} />);

  return (
    <Container component="main" maxWidth="lg" >
      {isLoading && <Spinner />}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        p: { xs: 2, sm: 7 },
        borderRadius: 2,
        borderWidth: '3px',
        borderColor: 'warning.light',
        borderStyle: 'solid'
      }} >
        <Avatar sx={{ mb: 1, mt: { xs: 0, sm: -2 }, bgcolor: 'secondary.main' }}>
          <AddBusinessIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create a product
        </Typography>
        <ProductFormik />
        <Link onClick={handleGoToHome} variant="body2" sx={{ cursor: 'pointer' }} >
          Don&apos;t want to? Go to home
        </Link>
      </Box>
    </Container>
  );
};

export default CreateProduct;
