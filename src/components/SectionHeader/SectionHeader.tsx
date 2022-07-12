import React from 'react';
import { Box, Typography, Divider, TypographyProps } from '@mui/material';

interface SectionHeaderProps {
  children?: React.ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  showDivider?: boolean;
  title: string;
  variant?: TypographyProps['variant'];
}

const SectionHeader = ({
  children,
  component = 'h4',
  showDivider = false,
  title,
  variant = 'h5',
}: SectionHeaderProps) => {
  return (
    <Box>
      <Typography component={component} variant={variant}>
        {title}
      </Typography>
      {showDivider && <Divider />}
      {children}
    </Box>
  );
};

export default SectionHeader;
