import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
  const [cartBadgeNumber, setCartBadgeNumber] = useState(1);

  const handleCartClick = () => {
    setCartBadgeNumber(cartBadgeNumber + 1);
  };

  return (
    <>
      <IconButton
        aria-label='carrito'
        size='large'
        color='inherit'
        onClick={handleCartClick}>
        <Badge badgeContent={cartBadgeNumber} color='error'>
          <ShoppingCartIcon sx={{ fontSize: 31 }} />
        </Badge>
      </IconButton>
    </>
  );
};

export default CartWidget;
