import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

function ProductCard ({ fromParent }) {
  const { obj } = fromParent;

  return (
    <>
      <CardActionArea>
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
          <Button size='small' variant='contain' sx={{
            backgroundColor: 'secondary.main',
            ':hover': {
              backgroundColor: 'primary.main'
            }
          }}>
            Add to cart
          </Button>
        </CardActions>
      </Box>
    </>

  );
}

ProductCard.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.obj': PropTypes.object
};

export default ProductCard;
