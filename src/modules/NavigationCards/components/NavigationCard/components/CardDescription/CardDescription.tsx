import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  const theme = useTheme();
  return (
    <Box
      component="span"
      width="100%"
      paddingX={theme.spacing(2)}
      marginBottom={theme.spacing(3)}
    >
      <Typography component="span" variant="body1" width="100%">
        {description}
      </Typography>
    </Box>
  );
};

export default CardDescription;
