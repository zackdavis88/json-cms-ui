import React from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AccordionSectionHeader } from 'src/modules/BlueprintEditor/components/BlueprintFields/components/BlueprintFieldAccordion/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface DangerZoneSectionProps {
  onFieldRemoveClick: () => void;
}

const DangerZoneSection = ({ onFieldRemoveClick }: DangerZoneSectionProps) => {
  const theme = useTheme();
  return (
    <Box marginTop={theme.spacing(3)}>
      <AccordionSectionHeader marginBottom={theme.spacing(2)} title="Danger Zone" />
      <Button variant="outlined" color="error" onClick={onFieldRemoveClick}>
        <Box component="span" marginRight={theme.spacing(1)}>
          <FontAwesomeIcon icon={faTrash} fixedWidth size="sm" />
        </Box>
        Remove
      </Button>
    </Box>
  );
};

export default DangerZoneSection;
