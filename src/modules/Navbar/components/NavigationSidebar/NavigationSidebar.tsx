import React from 'react';
import { Box, DrawerProps } from '@mui/material';
import { NavigationSidebarLayout } from './layout';
import { NavigationSidebarListItemButton } from './NavigationSidebarListItemButton';
import { AccountActions } from './AccountActions';

interface NavigationSidebarProps extends DrawerProps {
  handleClose: () => void;
}

const NavigationSidebar = ({ anchor, open, handleClose }: NavigationSidebarProps) => {
  return (
    <NavigationSidebarLayout anchor={anchor} open={open} onClose={handleClose}>
      <Box component="ul" margin="0" padding="0">
        <NavigationSidebarListItemButton handleClose={handleClose} href="/blueprints">
          Blueprints
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton handleClose={handleClose} href="/components">
          Components
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton handleClose={handleClose} href="/layouts">
          Layouts
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton handleClose={handleClose} href="/fragments">
          Fragments
        </NavigationSidebarListItemButton>
        <AccountActions handleClose={handleClose} />
      </Box>
    </NavigationSidebarLayout>
  );
};

export default NavigationSidebar;
