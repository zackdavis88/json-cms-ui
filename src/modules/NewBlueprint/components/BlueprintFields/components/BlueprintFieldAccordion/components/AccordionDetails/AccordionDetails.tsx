import React from 'react';
import {
  AccordionDetails as MUIAccordionDetails,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BlueprintField } from 'src/store/actions';
import { RequiredSection, OptionsSection, DangerZoneSection } from './layout';

interface AccordionDetailsProps {
  field: BlueprintField;
  onNameChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFieldRemoveClick: () => void;
  onTypeChange: (event: SelectChangeEvent) => void;
  onIsRequiredChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIsIntegerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMinChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegexChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccordionDetails = ({
  field,
  onFieldRemoveClick,
  onMaxChange,
  onMinChange,
  onNameChange,
  onTypeChange,
  onIsIntegerChange,
  onIsRequiredChange,
  onRegexChange,
}: AccordionDetailsProps) => {
  const theme = useTheme();
  const { id, name, type, isRequired, isInteger, min, max, regex } = field;

  return (
    <MUIAccordionDetails>
      <Box display="flex" flexDirection="column" marginTop={theme.spacing(2)}>
        <RequiredSection
          fieldId={id}
          type={type}
          nameInputProps={{ value: name, onChange: onNameChange }}
          typeSelectProps={{ value: type, onChange: onTypeChange }}
        />
        <OptionsSection
          fieldId={id}
          type={type}
          requiredCheckboxProps={{ checked: isRequired, onChange: onIsRequiredChange }}
          integerCheckboxProps={{ checked: isInteger, onChange: onIsIntegerChange }}
          minInputProps={{ value: min, onChange: onMinChange }}
          maxInputProps={{ value: max, onChange: onMaxChange }}
          regexInputProps={{ value: regex, onChange: onRegexChange }}
        />
        <DangerZoneSection onFieldRemoveClick={onFieldRemoveClick} />
      </Box>
    </MUIAccordionDetails>
  );
};

export default AccordionDetails;
