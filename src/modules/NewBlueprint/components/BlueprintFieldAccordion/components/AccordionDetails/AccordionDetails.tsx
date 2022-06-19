import React from 'react';
import {
  AccordionDetails as MUIAccordionDetails,
  Box,
  Button,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TreeNodeValue } from 'src/modules/NewBlueprint/NewBlueprint';

interface AccordionDetailsProps {
  id: TreeNodeValue['id'];
  name: TreeNodeValue['name'];
  onNameChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFieldRemoveClick: () => void;
}

const AccordionDetails = ({
  id,
  name,
  onFieldRemoveClick,
  onNameChange,
}: AccordionDetailsProps) => {
  const theme = useTheme();

  return (
    <MUIAccordionDetails>
      <Box display="flex" flexDirection="column" marginTop={theme.spacing(2)}>
        <TextField
          id={`${id}-name`}
          label="Field Name"
          variant="filled"
          type="text"
          fullWidth
          required
          inputProps={{ maxLength: 100 }}
          autoFocus={!name}
          value={name}
          onChange={onNameChange}
        />
        <Box marginTop={theme.spacing(2)}>
          <Button variant="outlined" color="error" onClick={onFieldRemoveClick}>
            <Box component="span" marginRight={theme.spacing(1)}>
              <FontAwesomeIcon icon={faTrash} fixedWidth size="sm" />
            </Box>
            Remove
          </Button>
        </Box>
      </Box>
    </MUIAccordionDetails>
  );
};

export default AccordionDetails;
