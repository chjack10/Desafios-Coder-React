import React, { useState } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
  const [cartBadgeNumber, setCartBadgeNumber] = useState(0);

  const handleCartClick = () => {
    setCartBadgeNumber(cartBadgeNumber + 1);
  };

  return (
    <IconButton
      sx={{ mx: 1 }}
      aria-label='carrito'
      size='large'
      color='inherit'
      onClick={handleCartClick}>
      <Badge badgeContent={cartBadgeNumber} color='error'>
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
