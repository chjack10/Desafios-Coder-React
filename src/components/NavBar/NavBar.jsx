import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import SearchBar from './SearchBar';
import CartWidget from '../Cart/CartWidget';
import Logo from './Logo';
import MenuNavList from './MenuNavList';
import UserLogo from './UserLogo';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const NavBar = () => {
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  return (
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
  );
};
export default NavBar;
