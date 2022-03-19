import React, { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MenuNavList = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ['Desktops', 'Notebooks', 'Gadgets', 'Contacto'];

  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
        }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'>
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}>
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign='center'>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: '#bdbdbd',
              '&:active': { color: 'white' },
              '&:hover': { color: 'white' },
              display: 'block',
            }}>
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

/*

TODO : 
1. Set active class for button links.
eg:
  <Button
  className={classes.button}
  component={NavLink} (Import NavLink from react-router-dom)
  to="/page-link"
>

2. Pass objects to [pages] instead of strings
 eg:

  pages = [{page: 'desktop', route: '/route?'}]

*/

export default MenuNavList;
