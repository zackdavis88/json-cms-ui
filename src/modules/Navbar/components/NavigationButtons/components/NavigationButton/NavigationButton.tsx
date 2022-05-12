import React from 'react';
import { Box, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationButton = ({ children, href, ...props }: ButtonProps) => {
  const router = useRouter();
  const isActivePath = router.pathname === href;

  const navigationButton = (
    <StyledButton href={href} {...props}>
      <Box
        component="span"
        position="relative"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
        {isActivePath && (
          <Box
            position="absolute"
            component="span"
            width="100%"
            height="100%"
            borderBottom="4px solid white"
            bottom="0"
            left="0"
          />
        )}
      </Box>
    </StyledButton>
  );

  return href ? <Link href={href}>{navigationButton}</Link> : navigationButton;
};

const StyledButton = styled(Button)(({ theme }) => ({
  height: '100%',
  color: theme.palette.common.white,
  borderRadius: 0,
  fontWeight: 'bold',
  padding: 0,
}));

export default NavigationButton;
