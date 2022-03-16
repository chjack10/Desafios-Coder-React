import React from 'react';

import ItemCounter from '../ItemDetail/ItemCount';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ItemListCointainer = () => {
  const getCounterFromChild = (counter) =>
    alert(`Esto va a ser el badge del carrito: ${counter}`);

  return (
    <Container maxWidth='sm'>
      <Box display='flex' justifyContent='center'>
        <ItemCounter stock={10} initial={1} onAdd={getCounterFromChild} />
      </Box>
    </Container>
  );
};

export default ItemListCointainer;
