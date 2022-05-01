import React from 'react';
import { Box, DrawerProps } from '@mui/material';
import { NavigationSidebarLayout } from './layout';
import { NavigationSidebarButton } from './NavigationSidebarButton';
import { useTheme } from '@mui/material/styles';

interface NavigationSidebarProps extends DrawerProps {
  handleClose: () => void;
}

const NavigationSidebar = ({ anchor, open, handleClose }: NavigationSidebarProps) => {
  const theme = useTheme();

  return (
    <NavigationSidebarLayout anchor={anchor} open={open} onClose={handleClose}>
      <Box component="ul" margin="0" padding="0">
        <Box
          component="li"
          display="block"
          role="listitem"
          height="48px"
          marginBottom={theme.spacing(1)}
        >
          <NavigationSidebarButton onClick={handleClose} href="/blueprints">
            Blueprints
          </NavigationSidebarButton>
        </Box>
        <Box
          component="li"
          display="block"
          role="listitem"
          height="48px"
          marginBottom={theme.spacing(1)}
        >
          <NavigationSidebarButton onClick={handleClose} href="/components">
            Components
          </NavigationSidebarButton>
        </Box>
        <Box
          component="li"
          display="block"
          role="listitem"
          height="48px"
          marginBottom={theme.spacing(1)}
        >
          <NavigationSidebarButton onClick={handleClose} href="/layouts">
            Layouts
          </NavigationSidebarButton>
        </Box>
        <Box
          component="li"
          display="block"
          role="listitem"
          height="48px"
          marginBottom={theme.spacing(1)}
        >
          <NavigationSidebarButton onClick={handleClose} href="/fragments">
            Fragments
          </NavigationSidebarButton>
        </Box>
      </Box>
    </NavigationSidebarLayout>
  );
};

export default NavigationSidebar;
