import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface WrapperProps {
  children: React.ReactNode;
}

const AbsoluteWrapper = ({ children }: WrapperProps) => {
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      top={theme.spacing(3)}
      right={theme.spacing(3)}
      margin={theme.spacing(0)}
      padding={theme.spacing(0)}
      zIndex={theme.zIndex.appBar - 1}
    >
      {children}
    </Box>
  );
};

export default AbsoluteWrapper;
