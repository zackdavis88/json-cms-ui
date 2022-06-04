import React from 'react';
import Link from 'next/link';
import { useTheme, styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

interface CardButtonProps {
  children: React.ReactNode;
  href: string;
}

const CardButton = ({ children, href }: CardButtonProps) => {
  const theme = useTheme();
  return (
    <Link href={href}>
      <StyledButton disableRipple href={href}>
        <Box
          height="100%"
          component="span"
          display="inline-flex"
          width="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          borderRadius={`${theme.radii(1.5)} ${theme.radii(1.5)} 0px 0px`}
          border={`1px solid ${theme.palette.secondary.dark}`}
          color="inherit"
        >
          {children}
        </Box>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  textTransform: 'none',
  color: theme.palette.common.black,
  minHeight: '215px',
  height: '215px',
  [theme.breakpoints.between(theme.breakpoints.values.sm, theme.breakpoints.values.lg)]: {
    width: '50%',
  },
}));

export default CardButton;
