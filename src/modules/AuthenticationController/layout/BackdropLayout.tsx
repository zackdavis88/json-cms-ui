import React from 'react';
import { Backdrop } from 'src/modules/AuthenticationController/components';
import { Typography, CircularProgress, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BackdropLayout = () => {
  const theme = useTheme();
  return (
    <Backdrop open={true}>
      <Box marginBottom={theme.spacing(3)}>
        <CircularProgress color="inherit" />
      </Box>
      <Typography variant="h5">Checking Authentication Status...</Typography>
    </Backdrop>
  );
};

export default BackdropLayout;
