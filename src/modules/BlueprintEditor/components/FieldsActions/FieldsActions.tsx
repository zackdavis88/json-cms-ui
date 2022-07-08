import React from 'react';
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import { ActionsContainer } from 'src/modules/BlueprintEditor/components';
import { useAddFieldButton } from 'src/modules/BlueprintEditor/hooks';
import { useDispatchAddBlueprintField } from 'src/hooks';

const FieldsActions = () => {
  const theme = useTheme();
  const addBlueprintField = useDispatchAddBlueprintField();
  const { disabled } = useAddFieldButton();
  return (
    <ActionsContainer>
      <Button
        variant="contained"
        color="success"
        onClick={addBlueprintField}
        disabled={disabled}
      >
        <Box component="span" marginRight={theme.spacing(1)}>
          <FontAwesomeIcon icon={faPlus} fixedWidth size="sm" />
        </Box>
        Add Field
      </Button>
    </ActionsContainer>
  );
};

export default FieldsActions;
