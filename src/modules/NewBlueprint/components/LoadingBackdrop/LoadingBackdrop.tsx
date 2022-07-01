import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledBackdrop } from './components';
import {
  useBlueprintName,
  useBlueprintAllFields,
  useBlueprintRootFields,
} from 'src/hooks';

interface LoadingBackdropProps {
  isOpen: boolean;
  handleBackdropClose: () => void;
}

const LoadingBackdrop = ({ isOpen, handleBackdropClose }: LoadingBackdropProps) => {
  const theme = useTheme();
  const name = useBlueprintName();
  const fields = useBlueprintAllFields();
  const rootFields = useBlueprintRootFields();

  if (!isOpen) {
    return null;
  }

  console.log(name);
  console.log(fields);
  console.log(rootFields);
  return (
    <StyledBackdrop open={isOpen}>
      <Box marginBottom={theme.spacing(3)}>
        <CircularProgress color="inherit" />
      </Box>
      <Typography variant="h5">Validating Blueprint Data</Typography>
    </StyledBackdrop>
  );
};

export default LoadingBackdrop;
