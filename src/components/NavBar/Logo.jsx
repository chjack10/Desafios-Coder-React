import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

const Logo = () => {
  return (
    <Avatar
      component={Link}
      to='/home'
      sx={{ marginRight: 3, height: 64 }}
      src='../../src/assets/img/lanus-logo.svg'
      alt='LanusLogo'
      loading='lazy'
      variant='rounded'
    />
  );
};

// {
//   <Avatar
//     component={Link}
//     href='/home'
//     maxHeight={70}
//     marginRight={2}
//     src='../../src/assets/img/lanus-logo.svg'
//     alt='LanusLogo'
//     loading='lazy'
//   />;
// }

{
  /* <Link href='/home'>
        <img
          src='../../src/assets/img/lanus-logo.svg'
          alt='LanusLogo'
          loading='lazy'
          height='70'
          width='70'
        />
</Link> */
}

export default Logo;
