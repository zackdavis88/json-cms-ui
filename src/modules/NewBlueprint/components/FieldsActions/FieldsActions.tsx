import React from 'react';
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import { ActionsContainer } from 'src/modules/NewBlueprint/components';

interface FieldsActionsProps {
  onAddFieldClick: (isRoot: boolean) => void;
  isRoot: boolean;
}

const FieldsActions = ({ onAddFieldClick, isRoot }: FieldsActionsProps) => {
  const theme = useTheme();
  return (
    <ActionsContainer>
      <Button variant="contained" color="success" onClick={() => onAddFieldClick(isRoot)}>
        <Box component="span" marginRight={theme.spacing(1)}>
          <FontAwesomeIcon icon={faPlus} fixedWidth size="sm" />
        </Box>
        Add Field
      </Button>
    </ActionsContainer>
  );
};

export default FieldsActions;
