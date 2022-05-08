import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ErrorBannerProps {
  children: React.ReactNode;
}

const ErrorBanner = ({ children }: ErrorBannerProps) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={theme.spacing(2)}
      bgcolor={theme.palette.error.main}
      color={theme.palette.common.white}
      borderRadius={`${theme.radii(1)} ${theme.radii(1)} 0px 0px`}
      border={`1px solid ${theme.palette.error.dark}`}
      marginBottom={theme.spacing(1)}
    >
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};

export default ErrorBanner;
