import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterSocialMedia from './FooterSocialMedia';

function Footer () {
  const navigate = useNavigate();

  const handleGoToDashboard = () => navigate('/');

  const socialMediaArray = [{
    text: '8th Street nº 978',
    icon: <LocationOnIcon fontSize="medium" sx={{ mb: -1 }}/>,
    link: 'https://www.google.com.ar/maps/@-34.9151715,-57.944769,15z'
  }, {
    text: '(+54) 9 11 1234 5678',
    icon: <PhoneIphoneIcon fontSize="medium" sx={{ mb: -1 }} />,
    link: 'https://web.whatsapp.com/'
  }, {
    text: ' FootstrapStore',
    icon: <FacebookIcon fontSize="medium" sx={{ mb: -1 }}/>,
    link: 'https://www.facebook.com/'
  }, {
    text: ' FootstrapOK',
    icon: <InstagramIcon fontSize="medium" sx={{ mb: -1 }}/>,
    link: 'https://www.instagram.com/'
  }];

  return (
    <Box component="footer" sx={{
      p: 2,
      mt: 5,
      backgroundColor: 'primary.main',
      borderTopStyle: 'solid',
      borderTopColor: 'warning.light',
      borderTopWidth: '2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ m: -2 }}
          onClick={handleGoToDashboard}
          >
          <img width="25px" src="icon.png" alt="footstrap logo" />
        </IconButton>
        <Button
          onClick={handleGoToDashboard}
          color="inherit"
          sx={{ fontSize: '1.2rem', display: { xs: 'none', sm: 'flex' } }}
        >
          Footstrap
        </Button>
      </Box>
      <FooterSocialMedia fromParent={{ array: socialMediaArray }}/>
      <Typography variant="body2" color="secondary.main">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/andressiri">
          Footstrap
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Footer;
