import React from 'react';

import ItemCounter from '../ItemDetail/ItemCount';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ItemListCointainer = () => {
  return (
    <Container maxWidth='sm'>
      <Box display='flex' justifyContent='center'>
        <ItemCounter stock={10} />
      </Box>
    </Container>
  );
};

export default ItemListCointainer;
