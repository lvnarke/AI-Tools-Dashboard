import React, { useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import { Grid } from '@mui/material';

function Dashboard({ data,onCardClick}) {
  const [search, setSearch] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);  // new state

  const filteredData = data.filter(item => 
    item.title.includes(search) ||
    item.description.includes(search) ||
    item.tags.some(tag => tag.includes(search))
  );

  return (
    <div>
        <SearchBar onSearch={setSearch} />

        <Grid container spacing={2}>
            {filteredData.map(item => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card {...item} onClick={() => onCardClick(item)} />
                </Grid>
            ))}
        </Grid>
    </div>
  );
}

export default Dashboard;
