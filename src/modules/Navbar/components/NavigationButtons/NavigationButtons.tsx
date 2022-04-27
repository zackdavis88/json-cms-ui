import React from 'react';
import { NavigationButton } from './NavigationButton';
import { Hidden } from 'src/components';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationButtons = () => {
  return (
    <>
      <Hidden hiddenOn="lgDown" display="inline-flex" height="100%">
        <NavigationButton href="/blueprints">Blueprints</NavigationButton>
        <NavigationButton href="/components">Components</NavigationButton>
        <NavigationButton href="/layouts">Layouts</NavigationButton>
        <NavigationButton href="/fragments">Fragments</NavigationButton>
      </Hidden>
      <Hidden hiddenOn={['lgUp', 'smDown']} display="inline-flex" height="100%">
        <NavigationButton>Navigation Menu</NavigationButton>
      </Hidden>
      <Hidden hiddenOn="smUp" display="inline-flex">
        <IconButton color="primary" aria-label="open navigation">
          <FontAwesomeIcon icon={faBars} fixedWidth size="sm" />
        </IconButton>
      </Hidden>
    </>
  );
};

export default NavigationButtons;
