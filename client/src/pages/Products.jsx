import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetProductsReq, getProducts, refreshProductsShown } from '../features/products/productsSlice';
import { toast } from 'material-react-toastify';
import ProductsCardsDisplay from '../components/ProductsCardsDisplay';

function Products () {
  const { products, isError, isSuccess, message } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(refreshProductsShown(10));
  }, []);

  useEffect(() => {
    if (isError) toast.error(message);

    dispatch(resetProductsReq());
  }, [isError, isSuccess, message]);

  return (
    <>
      <ProductsCardsDisplay fromParent={{ array: products }} />
    </>
  );
}

export default Products;
