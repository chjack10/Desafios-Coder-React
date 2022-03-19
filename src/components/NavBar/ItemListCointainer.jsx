import React from 'react';

import ItemCounter from '../ItemDetail/ItemCount';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ItemListCointainer = () => {
  const getCounterFromChild = (counter) => alert(`onAdd called: ${counter}`);

  return (
    <Container maxWidth='sm'>
      <Box display='flex' justifyContent='center'>
        <ItemCounter stock={1} initial={0} onAdd={getCounterFromChild} />
      </Box>
    </Container>
  );
};

export default ItemListCointainer;
