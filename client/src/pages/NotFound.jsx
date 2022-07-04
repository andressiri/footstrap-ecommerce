import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NotFound () {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bolder',
          color: 'warning.light',
          fontSize: { xs: '5rem', sm: '10rem' }
        }}
      >
        404
      </Typography>
      <Typography
        variant='h2'
        sx={{
          fontWeight: 'medium'
        }}
      >
        Page not found
      </Typography>
    </Box>
  );
}

export default NotFound;
