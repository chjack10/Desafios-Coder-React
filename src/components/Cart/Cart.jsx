import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import { Container, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import GoBackBtn from '../ui/GoBackBtn';

const Cart = () => {
  const { amountOfItemsInCart, totalCartPrice, cart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <>
      <h2>{`Mi carrito (${amountOfItemsInCart()})`}</h2>
      <hr />
      <br />
      {cart.length > 0 ? (
        <>
          <Container className='animate__animated animate__fadeIn'>
            {cart.map((item) => (
              <>
                <CartItem
                  key={item.id}
                  {...item}
                  removeItemFromCart={removeItemFromCart}
                />
                <Divider va riant='middle' sx={{ my: 3 }} />
              </>
            ))}
          </Container>

          <Typography
            variant='h6'
            align='right'
            className='animate__animated animate__fadeInUp'
          >
            Total: {'$' + totalCartPrice().toFixed(2)}
          </Typography>
          <GoBackBtn />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
