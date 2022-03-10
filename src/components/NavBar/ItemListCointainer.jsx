import React from 'react';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const ItemListCointainer = ({ greeting }) => {
  return (
    <Container maxWidth='sm'>
      <Alert severity='success'>{greeting}</Alert>
    </Container>
  );
};

export default ItemListCointainer;
