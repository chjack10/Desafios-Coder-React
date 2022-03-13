import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SearchBar from './SearchBar';
import CartWidget from './CartWidget';
import Logo from './Logo';
import MenuNavList from './MenuNavList';
import UserLogo from './UserLogo';

const NavBar = () => {
  return (
    <AppBar position='static' sx={{ bgcolor: '#84022e' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Logo />
          <MenuNavList />
          <Container maxWidth='xs' disableGutters>
            <SearchBar />
          </Container>
          <CartWidget />
          <UserLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
