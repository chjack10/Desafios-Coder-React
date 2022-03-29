import React, { useState } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

const CartWidget = () => {
  const [cartBadgeNumber, setCartBadgeNumber] = useState(0);

  const handleCartClick = () => {
    setCartBadgeNumber(cartBadgeNumber + 1);
  };

  return (
    <Tooltip title='Ver carrito'>
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
    </Tooltip>
  );
};

export default CartWidget;
