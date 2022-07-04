import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function ImagesList ({ fromParent }) {
  const { array } = fromParent;
  const navigate = useNavigate();

  return (
    <ImageList sx={{
      width: { xs: '100%', sm: 500 },
      height: 450,
      m: { xs: 0, sm: 2 },
      mb: 2
    }}>
      {array.map((prod) => (
        <ImageListItem
          key={prod.image_url}
          sx={{ maxHeight: '150px', minHeight: '150px', overflow: 'hidden' }}
        >
          <img
            src={`${prod.image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${prod.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`A picture of ${prod.name} shoe`}
          />
          <ImageListItemBar
            title={prod.name}
            subtitle={prod.price}
            sx={{ mb: -1 }}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${prod.name}`}
                onClick={() => { navigate(`/products/product/${prod.id}`); }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

ImagesList.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.array': PropTypes.array
};

export default ImagesList;
