import { useParams } from 'react-router-dom';

import Item from './Item';

import Grid from '@mui/material/Grid';

const ItemList = ({ items }) => {
  const screenHeading = () => {
    const { categoryId } = useParams();

    switch (categoryId) {
      case 'desktops':
        return 'Nuestras desktops';
      case 'notebooks':
        return 'Nuestras notebooks';
      case 'gadgets':
        return 'Nuestros gadgets';
      default:
        return 'Todos nuestros productos';
    }
  };

  return (
    <>
      <h2>{screenHeading()}</h2>
      <hr />

      <Grid container spacing={4} py={3}>
        {items?.map((item) => (
          <Grid item xs={12} sm={6} lg={3}>
            <Item key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default ItemList;
