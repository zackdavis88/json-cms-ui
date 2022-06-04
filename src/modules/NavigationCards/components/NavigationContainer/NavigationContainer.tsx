import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface NavigationContainerProps {
  children: React.ReactNode;
}

const NavigationContainer = ({ children }: NavigationContainerProps) => {
  return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  paddingTop: theme.spacing(2),
  [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default NavigationContainer;
