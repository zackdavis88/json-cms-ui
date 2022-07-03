import React from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  Button,
  SelectProps,
  MenuItem,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AccordionSectionHeader } from 'src/modules/NewBlueprint/components/BlueprintFields/components/BlueprintFieldAccordion/components';
import {
  BlueprintFieldTypes,
  BlueprintField,
  BlueprintFieldErrorTypes,
} from 'src/store/actions';
import { Select } from 'src/components';

interface RequiredSectionProps {
  fieldId: BlueprintField['id'];
  type: BlueprintField['type'];
  nameInputProps: TextFieldProps;
  typeSelectProps: SelectProps;
  onFieldViewChange: () => void;
  hasChildren: boolean;
  errorType: BlueprintField['errorType'];
  errorMessage: BlueprintField['errorMessage'];
}

const RequiredSection = ({
  fieldId,
  type,
  nameInputProps,
  typeSelectProps,
  onFieldViewChange,
  hasChildren,
  errorType,
  errorMessage,
}: RequiredSectionProps) => {
  const theme = useTheme();
  const showManageButton =
    type === BlueprintFieldTypes.ARRAY || type === BlueprintFieldTypes.OBJECT;
  const hasNameValue = !!nameInputProps.value;

  const hasNameError = errorType === BlueprintFieldErrorTypes.NAME;
  const hasChildrenError = errorType === BlueprintFieldErrorTypes.CHILDREN;
  const hasNestedError = errorType === BlueprintFieldErrorTypes.NESTED;

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
          error={hasNameError}
          helperText={hasNameError ? errorMessage : undefined}
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
          <Button
            variant={hasChildren ? 'contained' : 'outlined'}
            color={hasChildrenError || hasNestedError ? 'error' : 'primary'}
            onClick={onFieldViewChange}
            disabled={!hasNameValue}
          >
            Manage Fields
          </Button>
          {hasChildrenError && (
            <Typography
              variant="caption"
              component="p"
              color="error"
              marginX={theme.spacing(1)}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default RequiredSection;
