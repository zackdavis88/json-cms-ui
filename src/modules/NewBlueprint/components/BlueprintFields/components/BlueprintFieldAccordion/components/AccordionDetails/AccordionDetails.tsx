import React from 'react';
import {
  AccordionDetails as MUIAccordionDetails,
  Box,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Divider,
  Typography,
  Checkbox,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BlueprintField, BlueprintFieldTypes } from 'src/store/actions';
/*
  TODO:

  Break this component down more, its currently in prototype mode.
*/
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
  const showIsInteger = type === BlueprintFieldTypes.NUMBER;
  const showRange =
    type === BlueprintFieldTypes.STRING ||
    type === BlueprintFieldTypes.NUMBER ||
    type === BlueprintFieldTypes.ARRAY;
  const showRegex = type === BlueprintFieldTypes.STRING;
  return (
    <MUIAccordionDetails>
      <Box display="flex" flexDirection="column" marginTop={theme.spacing(2)}>
        <Box display="flex" alignItems="center">
          <Typography component="span" variant="caption">
            Required Data
          </Typography>
          <Box flex={1} paddingLeft={theme.spacing(2)}>
            <Divider flexItem />
          </Box>
        </Box>
        <Box width="100%" display="flex" flexDirection="column">
          <Box marginTop={theme.spacing(2)}>
            <TextField
              id={`${id}-name`}
              label="Field Name"
              variant="filled"
              type="text"
              fullWidth
              required
              inputProps={{ maxLength: 100 }}
              value={name}
              onChange={onNameChange}
            />
          </Box>
          <Box marginTop={theme.spacing(2)}>
            <FormControl variant="filled" sx={{ width: '100%' }}>
              <InputLabel id={`${id}-type-select-label`}>Type</InputLabel>
              <Select
                labelId={`${id}-type-select-label`}
                id={`${id}-type-select`}
                value={type}
                onChange={onTypeChange}
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
            </FormControl>
          </Box>
        </Box>
        <Box marginTop={theme.spacing(3)} display="flex" alignItems="center">
          <Typography component="span" variant="caption">
            Options
          </Typography>
          <Box flex={1} paddingLeft={theme.spacing(2)}>
            <Divider flexItem />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" marginTop={theme.spacing(2)}>
          <Box display="flex" flexDirection="row">
            <Box width="100%">
              <FormControlLabel
                control={<Checkbox checked={isRequired} onChange={onIsRequiredChange} />}
                label="Required Field"
              />
            </Box>
            {showIsInteger && (
              <Box width="100%">
                <FormControlLabel
                  control={<Checkbox checked={isInteger} onChange={onIsIntegerChange} />}
                  label="Integer Only"
                />
              </Box>
            )}
          </Box>
          {showRange && (
            <Box display="flex" flexDirection="row" marginTop={theme.spacing(2)}>
              <Box width="100%" paddingRight={theme.spacing(1)}>
                <TextField
                  id={`${id}-min-input`}
                  label="Min"
                  type="number"
                  variant="filled"
                  inputProps={{
                    min: 0,
                  }}
                  fullWidth
                  value={min || ''}
                  onChange={onMinChange}
                />
              </Box>
              <Box width="100%">
                <TextField
                  id={`${id}-max-input`}
                  label="Max"
                  type="number"
                  variant="filled"
                  inputProps={{
                    min: min,
                  }}
                  fullWidth
                  value={max || ''}
                  onChange={onMaxChange}
                />
              </Box>
            </Box>
          )}
          {showRegex && (
            <Box display="flex" flexDirection="row" marginTop={theme.spacing(2)}>
              <TextField
                id={`${id}-regex-input`}
                label="Regex"
                variant="filled"
                placeholder="Example: ^your_regex_here$"
                fullWidth
                value={regex}
                onChange={onRegexChange}
              />
            </Box>
          )}
        </Box>
        <Box marginTop={theme.spacing(3)} display="flex" alignItems="center">
          <Typography component="span" variant="caption">
            Danger Zone
          </Typography>
          <Box flex={1} paddingLeft={theme.spacing(2)}>
            <Divider flexItem />
          </Box>
        </Box>
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
