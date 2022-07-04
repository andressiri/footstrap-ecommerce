import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetProductsReq, getProducts, refreshProductsShown } from '../features/products/productsSlice';
import { toast } from 'material-react-toastify';
import ProductsCardsDisplay from '../components/ProductsCardsDisplay';

function DeleteProduct () {
  const { user } = useSelector((state) => state.auth);
  const { products, isError, isSuccess, message } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.roleId !== 2) navigate('/');
  }, []);

  useEffect(() => {
    if (!products[0]) dispatch(getProducts());
    dispatch(refreshProductsShown(10));
  }, []);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess && message) toast.success(message);

    dispatch(resetProductsReq());
  }, [isError, isSuccess, message]);

  if (!user || user.roleId !== 2) return (<div style={{ width: '1px', height: '1px' }} />);

  return (
    <>
      <ProductsCardsDisplay fromParent={{ array: products, action: 'delete' }} />
    </>
  );
}

export default DeleteProduct;
