import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshProductsShown } from '../features/products/productsSlice';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../helpers/useIntersectionObserver.js';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

function ProductsCardsDisplay ({ fromParent }) {
  const { array, action } = fromParent;
  const { productsShown } = useSelector((state) => state.products);
  const arrayToDisplay = array.slice(0, productsShown);
  const dispatch = useDispatch();

  //  Observer to handle loading
  const [observer, setObservedElements, entries] = useIntersectionObserver({
    rootMargin: '0px 0px 100px 0px'
  });

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dispatch(refreshProductsShown(productsShown + 10));
        observer.unobserve(entry.target);
      };
    });
  }, [entries, observer]);

  useEffect(() => {
    const quoteToObserve = document.querySelector('#quoteToObserve');
    if (quoteToObserve) setObservedElements([quoteToObserve]);
  }, [setObservedElements, arrayToDisplay]);

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }} >
      {arrayToDisplay.map((obj, i) => (
        <Card
          id={i === productsShown - 2 ? 'quoteToObserve' : `${obj.name}${i}`}
          key={`${obj.name}${i}`}
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            m: 2,
            p: 2,
            borderWidth: '3px',
            borderColor: 'warning.light',
            borderStyle: 'solid',
            backgroundColor: '#eceff1'
          }}>
          <ProductCard
            fromParent={{ obj, action }}
          />
        </Card>

      ))}
    </Box>
  );
}

ProductsCardsDisplay.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.array': PropTypes.array,
  'fromParent.action': PropTypes.string
};

export default ProductsCardsDisplay;
