import React from 'react';
import { BoxProps } from '@mui/material';
import { ResponsiveWrapper } from './ResponsiveWrapper';

export type HiddenOption =
  | 'xsDown'
  | 'xsUp'
  | 'smDown'
  | 'smUp'
  | 'mdDown'
  | 'mdUp'
  | 'lgDown'
  | 'lgUp'
  | 'xlDown'
  | 'xlUp';

export interface HiddenProps extends BoxProps {
  component?: BoxProps['component'];
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'inline-flex';
  hiddenOn: HiddenOption | HiddenOption[];
}

const Hidden = ({
  children,
  component = 'div',
  hiddenOn,
  display = 'block',
  ...props
}: HiddenProps) => {
  return (
    <ResponsiveWrapper
      {...props}
      component={component}
      hiddenOn={hiddenOn}
      display={display}
    >
      {children}
    </ResponsiveWrapper>
  );
};

export default Hidden;
