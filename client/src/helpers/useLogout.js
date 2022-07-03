import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, resetAuth } from '../features/auth/authSlice';
import { resetMUIComponents } from '../features/muiComponents/muiComponentsSlice';

function useLogout () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetAuth());
    navigate('/');
    dispatch(resetMUIComponents());
  };
  return handleLogout;
};

export default useLogout;
