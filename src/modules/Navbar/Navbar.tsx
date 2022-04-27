import React from 'react';
import { Box } from '@mui/material';
import { Hidden } from 'src/components';
import { NavbarLayout } from './layout';
import { Brand, ContentFlexBox, NavigationButtons } from './components';

const Navbar = () => {
  return (
    <NavbarLayout>
      <ContentFlexBox>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
        >
          <NavigationButtons />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="auto"
        >
          <Brand />
        </Box>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
        >
          <Hidden hiddenOn="lgDown">booya</Hidden>
        </Box>
      </ContentFlexBox>
    </NavbarLayout>
  );
};

export default Navbar;
