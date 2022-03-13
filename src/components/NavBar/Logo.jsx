import React from 'react';

import Box from '@mui/material/Box';

const Logo = () => {
  return (
    <Box marginRight={1}>
      <a href='/'>
        <img
          src='../../src/assets/img/lanus-logo.svg'
          alt='LanusLogo'
          loading='lazy'
          height='70'
          width='70'
        />
      </a>
    </Box>
  );
};

export default Logo;
