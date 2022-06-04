import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavigationHeader = () => {
  const theme = useTheme();
  return (
    <Box paddingTop={theme.spacing(2)} paddingX={theme.spacing(1)}>
      <Typography component="h4" variant="h5">
        What are you looking for?
      </Typography>
    </Box>
  );
};

export default NavigationHeader;
