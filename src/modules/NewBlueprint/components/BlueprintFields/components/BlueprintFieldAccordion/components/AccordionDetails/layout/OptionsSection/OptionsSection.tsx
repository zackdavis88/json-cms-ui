import React from 'react';
import { Box, TextField, TextFieldProps, CheckboxProps } from '@mui/material';
import { Checkbox } from 'src/components';
import { useTheme } from '@mui/material/styles';
import { AccordionSectionHeader } from 'src/modules/NewBlueprint/components/BlueprintFields/components/BlueprintFieldAccordion/components';
import { BlueprintFieldTypes } from 'src/store/actions';

interface OptionsSectionProps {
  fieldId: string;
  type: BlueprintFieldTypes;
  requiredCheckboxProps: CheckboxProps;
  integerCheckboxProps: CheckboxProps;
  minInputProps: TextFieldProps;
  maxInputProps: TextFieldProps;
  regexInputProps: TextFieldProps;
}

const OptionsSection = ({
  fieldId,
  type,
  requiredCheckboxProps,
  integerCheckboxProps,
  minInputProps,
  maxInputProps,
  regexInputProps,
}: OptionsSectionProps) => {
  const theme = useTheme();
  const showIsInteger = type === BlueprintFieldTypes.NUMBER;
  const showRange =
    type === BlueprintFieldTypes.STRING ||
    type === BlueprintFieldTypes.NUMBER ||
    type === BlueprintFieldTypes.ARRAY;
  const showRegex = type === BlueprintFieldTypes.STRING;

  return (
    <Box display="flex" flexDirection="column" marginTop={theme.spacing(3)}>
      <AccordionSectionHeader title="Options" />
      <Box marginTop={theme.spacing(2)} display="flex" flexDirection="row">
        <Box width="100%">
          <Checkbox
            label="Required Field"
            checked={requiredCheckboxProps.checked}
            onChange={requiredCheckboxProps.onChange}
          />
        </Box>
        {showIsInteger && (
          <Box width="100%">
            <Checkbox
              label="Integer Only"
              checked={integerCheckboxProps.checked}
              onChange={integerCheckboxProps.onChange}
            />
          </Box>
        )}
      </Box>
      {showRange && (
        <Box display="flex" flexDirection="row" marginTop={theme.spacing(2)}>
          <Box width="100%" paddingRight={theme.spacing(1)}>
            <TextField
              id={`${fieldId}-min-input`}
              label="Min"
              type="number"
              variant="filled"
              inputProps={{
                min: 0,
              }}
              fullWidth
              value={minInputProps.value || ''}
              onChange={minInputProps.onChange}
            />
          </Box>
          <Box width="100%">
            <TextField
              id={`${fieldId}-max-input`}
              label="Max"
              type="number"
              variant="filled"
              inputProps={{
                min: 0,
              }}
              fullWidth
              value={maxInputProps.value || ''}
              onChange={maxInputProps.onChange}
            />
          </Box>
        </Box>
      )}
      {showRegex && (
        <Box display="flex" flexDirection="row" marginTop={theme.spacing(2)}>
          <TextField
            id={`${fieldId}-regex-input`}
            label="Regex"
            variant="filled"
            placeholder="Example: ^your_regex_here$"
            fullWidth
            value={regexInputProps.value}
            onChange={regexInputProps.onChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default OptionsSection;
