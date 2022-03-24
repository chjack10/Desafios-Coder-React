import { useState, useEffect } from 'react';

import Item from './Item';
import data from '../../data/data';
import LoadingSpinner from '../ui/LoadingSpinner';

import Grid from '@mui/material/Grid';

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
        <LoadingSpinner />
      )}
    </>
  );
};
export default ItemList;
