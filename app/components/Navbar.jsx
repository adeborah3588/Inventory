// components/Navbar.js
'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import GoogleSignIn from './GoogleSignIn';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Inventory Management
        </Typography>
        <GoogleSignIn />
        <Button color="inherit" component={Link} href="/pantry">
          Pantry
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
