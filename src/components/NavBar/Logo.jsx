import React from 'react';
Link;

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Logo = () => {
  return (
    <Box marginRight={1}>
      <Link href='/'>
        <img
          src='../../src/assets/img/lanus-logo.svg'
          alt='LanusLogo'
          loading='lazy'
          height='70'
          width='70'
        />
      </Link>
    </Box>
  );
};

export default Logo;
