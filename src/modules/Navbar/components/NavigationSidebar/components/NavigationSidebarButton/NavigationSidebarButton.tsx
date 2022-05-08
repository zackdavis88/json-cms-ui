import React from 'react';
import { Button, ButtonProps, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavigationSidebarButton = ({ children, href, onClick }: ButtonProps) => {
  const router = useRouter();
  const isActivePath = router.pathname === href;

  const sidebarButton = (
    <StyledButton onClick={onClick} href={href}>
      <Box
        component="span"
        position="relative"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        {children}
        {isActivePath && (
          <Box
            position="absolute"
            component="span"
            width="100%"
            height="100%"
            borderRight="4px solid white"
            bottom="0"
            left="0"
          />
        )}
      </Box>
    </StyledButton>
  );

  return href ? <Link href={href}>{sidebarButton}</Link> : sidebarButton;
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '100%',
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontWeight: 'bold',
  padding: 0,
  borderRadius: 0,
}));

export default NavigationSidebarButton;
