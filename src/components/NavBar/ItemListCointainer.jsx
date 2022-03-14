import React from 'react';

import ItemCounter from '../ItemDetail/ItemCount';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ItemListCointainer = ({ greeting }) => {
  return (
    <Container maxWidth='sm'>
      <Box display='flex' justifyContent='center'>
        <ItemCounter />
      </Box>
    </Container>
    // <Box  marginTop={2} display='flex' justifyContent='center'>
    //   <Counter />
    // </Box>
  );
};

export default ItemListCointainer;
