import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';

interface NavbarLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarLayout;
