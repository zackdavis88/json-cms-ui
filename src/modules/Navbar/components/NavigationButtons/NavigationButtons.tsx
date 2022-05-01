import React from 'react';
import { NavigationButton, NavigationIconButton } from './components';
import { Hidden } from 'src/components';
import { ROUTES } from 'src/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationSidebar } from 'src/modules/Navbar/components';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavigationButtons = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const handleSidebarOpen = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);
  const theme = useTheme();

  return (
    <>
      <Hidden hiddenOn="lgDown" display="inline-flex" height="100%">
        <NavigationButton href={ROUTES.BLUEPRINTS}>Blueprints</NavigationButton>
        <NavigationButton href={ROUTES.COMPONENTS}>Components</NavigationButton>
        <NavigationButton href={ROUTES.LAYOUTS}>Layouts</NavigationButton>
        <NavigationButton href={ROUTES.FRAGMENTS}>Fragments</NavigationButton>
      </Hidden>
      <Hidden hiddenOn={['lgUp', 'smDown']} display="inline-flex" height="100%">
        <NavigationButton onClick={handleSidebarOpen}>
          <Box component="span" marginRight={theme.spacing(1)}>
            <FontAwesomeIcon icon={faBars} fixedWidth className="fa-xl" />
          </Box>
          Navigation
        </NavigationButton>
      </Hidden>
      <Hidden hiddenOn="smUp" display="inline-flex">
        <NavigationIconButton
          color="primary"
          aria-label="open navigation"
          onClick={handleSidebarOpen}
        >
          <FontAwesomeIcon icon={faBars} fixedWidth size="sm" />
        </NavigationIconButton>
      </Hidden>
      <NavigationSidebar
        anchor="left"
        open={sidebarOpen}
        handleClose={handleSidebarClose}
      />
    </>
  );
};

export default NavigationButtons;
