import React from 'react';
import { AppBar, Container, Toolbar, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface NavbarLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const theme = useTheme();
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            width="100%"
            height={theme.mixins.toolbar.height}
            flexDirection="row"
            justifyContent="space-between"
          >
            {children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarLayout;
