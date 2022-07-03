import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ValidationBackdropLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box marginBottom={theme.spacing(3)}>
        <CircularProgress color="inherit" />
      </Box>
      <Typography variant="h5">Validating Blueprint Data</Typography>
    </>
  );
};

export default ValidationBackdropLayout;
