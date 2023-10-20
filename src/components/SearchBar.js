import React from 'react';
import { TextField } from '@mui/material';

function SearchBar({ onSearch }) {
  return (
    <TextField 
      fullWidth 
      variant="outlined" 
      label="Search" 
      onChange={e => onSearch(e.target.value)}
      InputProps={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Less transparent
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',  // Text color
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      }}
      InputLabelProps={{
        style: {
          color: 'white',
        }
      }}
    />
  );
}

export default SearchBar;
