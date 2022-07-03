import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function NavigationDrawerList ({ fromParent }) {
  const { array } = fromParent;

  return (
    <List>
      {array.map((obj) => (
        <ListItem button onClick={obj.onClick} key={obj.text} >
          <ListItemIcon sx={{ color: 'white' }}>
            {obj.icon}
          </ListItemIcon>
          <ListItemText primary={obj.text} sx={{ color: 'white' }} />
        </ListItem>
      ))}
    </List>
  );
}

NavigationDrawerList.propTypes = {
  fromParent: PropTypes.object,
  'fromParent.array': PropTypes.array
};

export default NavigationDrawerList;
