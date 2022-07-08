import React from 'react';
import { Box, BoxProps, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface AccordionSectionHeaderProps extends BoxProps {
  title: string;
}

const AccordionSectionHeader = ({ title, ...boxProps }: AccordionSectionHeaderProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center" {...boxProps}>
      <Typography component="span" variant="caption">
        {title}
      </Typography>
      <Box flex={1} paddingLeft={theme.spacing(2)}>
        <Divider />
      </Box>
    </Box>
  );
};

export default AccordionSectionHeader;
