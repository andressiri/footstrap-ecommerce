import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function FooterSocialMedia ({ fromParent }) {
  const { array } = fromParent;

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {array.map((obj, i) => (
        <Button key={`${obj.text}${i}`} sx={{ color: 'white', textTransform: 'none', ml: 1 }} >
          <Link
            href={obj.link}
            target='_blank'
            color="inherit"
            sx={{ textDecoration: 'none', ml: -1, fontSize: '14px' }}
          >
            {obj.icon}{obj.text}
          </Link>
        </Button>
      ))}
    </Box>
  );
}

FooterSocialMedia.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.array': PropTypes.array
};

export default FooterSocialMedia;
