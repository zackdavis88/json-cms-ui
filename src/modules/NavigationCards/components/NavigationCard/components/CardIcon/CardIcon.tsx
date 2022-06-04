import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface CardIconProps {
  icon: IconDefinition;
}

const CardIcon = ({ icon }: CardIconProps) => {
  const theme = useTheme();
  return (
    <Box component="span" marginBottom={theme.spacing(3)}>
      <FontAwesomeIcon icon={icon} fixedWidth size="4x" />
    </Box>
  );
};

export default CardIcon;
