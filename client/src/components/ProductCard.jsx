import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productsSlice';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function ProductCard ({ fromParent }) {
  const { obj, action } = fromParent;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let buttonText = 'Add to cart';
  let buttonColor = 'secondary.main';
  let buttonHover = 'primary.main';
  let buttonAction = () => navigate(`/products/product/${obj.id}`);
  let handleCard = () => navigate(`/products/product/${obj.id}`);

  if (action === 'delete') {
    buttonText = 'Delete';
    buttonColor = 'error.light';
    buttonHover = 'red';
    buttonAction = () => dispatch(deleteProduct(obj.id));
    handleCard = () => navigate(`/products/delete/${obj.id}`);
  }

  return (
    <>
      <CardActionArea
        sx={{ borderRadius: '10px' }}
        onClick={handleCard}
      >
        <CardMedia
          component='img'
          height='250'
          image={obj.image_url}
          alt={`A pìcture of ${obj.name} shoe`}
          sx={{
            objectFit: 'contain',
            borderWidth: '3px',
            borderColor: 'warning.light',
            borderStyle: 'solid',
            borderRadius: '4px',
            p: 2,
            backgroundColor: 'white'
          }}
        />
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between'
        }} >
          <Typography gutterBottom variant='h5' component='div'>
            {obj.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between'
      }} >

        <Typography variant='h5' color='primary' sx={{
          mb: 1
        }} >
          ${obj.price}
        </Typography>
        <CardActions>
          <Button
            size='small'
            variant='contain'
            sx={{
              backgroundColor: buttonColor,
              ':hover': { backgroundColor: buttonHover }
            }}
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Box>
    </>

  );
}

ProductCard.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.obj': PropTypes.object,
  'fromParent.action': PropTypes.string
};

export default ProductCard;
