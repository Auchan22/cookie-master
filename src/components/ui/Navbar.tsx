import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>

        <Link href='/'>
          <Typography variant='h6' color='#fff'>
            CookieMaster
          </Typography>
        </Link>

        <div style={{ flex: 1 }}></div>

        <Link href='/theme-changer'>
          <Typography variant='h6' color='#fff'>
            Cambiar Tema
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
