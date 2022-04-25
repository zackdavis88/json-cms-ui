import React from 'react';
import { BoxProps } from '@mui/material';
import { ResponsiveWrapper } from './ResponsiveWrapper';

export interface HiddenProps extends BoxProps {
  component: BoxProps['component'];
  display: 'flex' | 'block' | 'inline' | 'inline-block' | 'inline-flex';
  hiddenOn: 'smDown' | 'smUp' | 'mdDown' | 'mdUp' | 'lgDown' | 'lgUp';
}

const Hidden = ({ children, component, hiddenOn, display = 'block' }: HiddenProps) => {
  return (
    <ResponsiveWrapper component={component} hiddenOn={hiddenOn} display={display}>
      {children}
    </ResponsiveWrapper>
  );
};

export default Hidden;
