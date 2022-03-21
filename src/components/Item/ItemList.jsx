import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Item from './Item';
import CircularProgress from '@mui/material/CircularProgress';
import data from '../../data/data';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchData.then(setItems);
  }, []);

  const fetchData = new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });

  return (
    <>
      <h2>Todos nuestros productos</h2>
      <hr />

      {items ? (
        <Grid container spacing={4} py={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Item key={item.id} {...item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box display='flex' flexDirection='column' alignItems='center'>
          <CircularProgress />
          <Typography variant='overline'>Cargando...</Typography>
        </Box>
      )}
    </>
  );
};
export default ItemList;
