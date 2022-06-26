import React from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  Button,
  SelectProps,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AccordionSectionHeader } from 'src/modules/NewBlueprint/components/BlueprintFields/components/BlueprintFieldAccordion/components';
import { BlueprintFieldTypes } from 'src/store/actions';
import { Select } from 'src/components';

interface RequiredSectionProps {
  fieldId: string;
  type: BlueprintFieldTypes;
  nameInputProps: TextFieldProps;
  typeSelectProps: SelectProps;
}

// TODO: This is where you left off. Lets update the Manage button to be contained/outlined based on if the field has nested fields or not.
//       Create the dispatch method for updating the field view within the store.
const RequiredSection = ({
  fieldId,
  type,
  nameInputProps,
  typeSelectProps,
}: RequiredSectionProps) => {
  const theme = useTheme();
  const showManageButton =
    type === BlueprintFieldTypes.ARRAY || type === BlueprintFieldTypes.OBJECT;

  return (
    <Box display="flex" flexDirection="column">
      <AccordionSectionHeader title="Required Data" />
      <Box marginTop={theme.spacing(2)}>
        <TextField
          id={`${fieldId}-name`}
          label="Field Name"
          variant="filled"
          type="text"
          fullWidth
          required
          inputProps={{ maxLength: 100 }}
          value={nameInputProps.value}
          onChange={nameInputProps.onChange}
        />
      </Box>
      <Box marginTop={theme.spacing(2)}>
        <Select
          id={`${fieldId}-type-select`}
          value={typeSelectProps.value}
          onChange={typeSelectProps.onChange}
          required
          fullWidth
        >
          <MenuItem value={BlueprintFieldTypes.STRING}>String</MenuItem>
          <MenuItem value={BlueprintFieldTypes.NUMBER}>Number</MenuItem>
          <MenuItem value={BlueprintFieldTypes.BOOLEAN}>Boolean</MenuItem>
          <MenuItem value={BlueprintFieldTypes.DATE}>Date</MenuItem>
          <MenuItem value={BlueprintFieldTypes.ARRAY}>Array</MenuItem>
          <MenuItem value={BlueprintFieldTypes.OBJECT}>Object</MenuItem>
        </Select>
      </Box>
      {showManageButton && (
        <Box marginTop={theme.spacing(2)}>
          <Button variant="outlined" color="primary" onClick={() => {}}>
            Manage Fields
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RequiredSection;
