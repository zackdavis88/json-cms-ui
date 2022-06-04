import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CardHeaderProps {
  name: string;
}

const CardHeader = ({ name }: CardHeaderProps) => {
  const theme = useTheme();
  return (
    <Box
      component="span"
      width="100%"
      bgcolor={theme.palette.secondary.dark}
      color={theme.palette.common.black}
      borderRadius={`${theme.radii(1)} ${theme.radii(1)} 0px 0px`}
      textAlign="center"
      marginBottom={theme.spacing(3)}
    >
      <Typography variant="h5">{name}</Typography>
    </Box>
  );
};

export default CardHeader;
