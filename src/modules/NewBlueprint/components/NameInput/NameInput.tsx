import React from 'react';
import { TextField } from '@mui/material';
import { useBlueprintName, useDispatchUpdateBlueprintName } from 'src/hooks';

interface NameInputProps {
  nameInputRef: React.MutableRefObject<HTMLInputElement | undefined>;
}

const NameInput = ({ nameInputRef }: NameInputProps) => {
  const { name, nameError } = useBlueprintName();
  const updateBlueprintName = useDispatchUpdateBlueprintName();

  return (
    <TextField
      id="blueprint-name"
      label="Blueprint Name"
      variant="filled"
      type="text"
      fullWidth
      required
      inputProps={{ maxLength: 100 }}
      inputRef={nameInputRef}
      value={name}
      onChange={(e) => updateBlueprintName(e.target.value.trim())}
      error={!!nameError}
      helperText={nameError}
    />
  );
};

export default NameInput;
