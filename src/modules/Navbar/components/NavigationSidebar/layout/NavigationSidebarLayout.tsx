import React from 'react';
import { Drawer, Box, DrawerProps } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NavigationSidebarButton } from 'src/modules/Navbar/components/NavigationSidebar/NavigationSidebarButton';

interface NavigationSidebarLayoutProps extends DrawerProps {
  onClose: () => void;
  children: React.ReactNode;
}

const NavigationSidebarLayout = ({
  anchor,
  children,
  onClose,
  open,
}: NavigationSidebarLayoutProps) => {
  const theme = useTheme();
  return (
    <StyledDrawer anchor={anchor} open={open} onClose={onClose}>
      <Box
        display="flex"
        alignItems="center"
        height={theme.mixins.toolbar.height}
        marginBottom={theme.spacing(1)}
      >
        <NavigationSidebarButton onClick={onClose}>
          <Box component="span" paddingLeft={theme.spacing(3)}>
            <Box component="span" marginRight={theme.spacing(1)}>
              <FontAwesomeIcon icon={faClose} fixedWidth className="fa-xl" />
            </Box>
            Close
          </Box>
        </NavigationSidebarButton>
      </Box>
      {children}
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& > .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: '240px',
    background: `${theme.palette.primary.main}`,
    color: theme.palette.common.white,
  },
}));

export default NavigationSidebarLayout;
