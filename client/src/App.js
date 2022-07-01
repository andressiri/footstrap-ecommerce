import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7b4bf3'
    },
    secondary: {
      main: '#f943de'
    }
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

function App () {
  return (
    <ThemeProvider theme={theme} >
      <Typography variant='h2' >Hello Footstrap!</Typography>
    </ThemeProvider>
  );
}

export default App;
