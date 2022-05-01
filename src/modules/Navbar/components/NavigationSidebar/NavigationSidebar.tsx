import React from 'react';
import { Box, DrawerProps } from '@mui/material';
import { NavigationSidebarLayout } from './layout';
import { NavigationSidebarListItemButton, AccountActions } from './components';
import { ROUTES } from 'src/constants';

interface NavigationSidebarProps extends DrawerProps {
  handleClose: () => void;
}

const NavigationSidebar = ({ anchor, open, handleClose }: NavigationSidebarProps) => {
  React.useEffect(() => {
    const handleWindowResize = () => {
      if (open) {
        handleClose();
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [open, handleClose]);

  return (
    <NavigationSidebarLayout anchor={anchor} open={open} onClose={handleClose}>
      <Box component="ul" margin="0" padding="0">
        <NavigationSidebarListItemButton
          handleClose={handleClose}
          href={ROUTES.BLUEPRINTS}
        >
          Blueprints
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton
          handleClose={handleClose}
          href={ROUTES.COMPONENTS}
        >
          Components
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton handleClose={handleClose} href={ROUTES.LAYOUTS}>
          Layouts
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton
          handleClose={handleClose}
          href={ROUTES.FRAGMENTS}
        >
          Fragments
        </NavigationSidebarListItemButton>
        <AccountActions handleClose={handleClose} />
      </Box>
    </NavigationSidebarLayout>
  );
};

export default NavigationSidebar;
