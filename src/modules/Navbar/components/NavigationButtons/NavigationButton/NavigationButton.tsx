import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const NavigationButton = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled(Button)(({ theme }) => ({
  height: '100%',
  color: theme.palette.common.white,
  marginRight: theme.spacing(1),
  borderRadius: 0,
  fontWeight: 'bold',
}));

export default NavigationButton;
