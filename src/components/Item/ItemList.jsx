import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Item from './Item';

const ItemList = () => {
  return (
    <>
      <h2>Todos nuestros productos</h2>
      <hr />
      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} sm={6} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Item />
        </Grid>
      </Grid>
    </>
  );
};
export default ItemList;
