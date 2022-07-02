import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner () {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 10 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Spinner;
