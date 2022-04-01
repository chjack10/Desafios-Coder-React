import { useContext, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import CartItem from './CartItem';
import { ArrowBack, CardTravelSharp } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const { amountOfItemsInCart, totalCartPrice, cart } = useContext(CartContext);

  return (
    <>
      <h2>{`Mi carrito (${amountOfItemsInCart()})`}</h2>
      <hr />

      {cart.length > 0 ? (
        <Container className='animate__animated animate__fadeIn' >
          <>
            <CartItem />
            <Divider />
          </>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
