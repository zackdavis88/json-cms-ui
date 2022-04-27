import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const NavigationButton = ({ children, href, ...props }: ButtonProps) => {
  const navigationButton = (
    <StyledButton href={href} {...props}>
      {children}
    </StyledButton>
  );

  return href ? <Link href={href}>{navigationButton}</Link> : navigationButton;
};

const StyledButton = styled(Button)(({ theme }) => ({
  height: '100%',
  color: theme.palette.common.white,
  marginRight: theme.spacing(1),
  borderRadius: 0,
  fontWeight: 'bold',
}));

export default NavigationButton;
