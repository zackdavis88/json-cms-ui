import React from 'react';
import { FormControl, InputLabel, Select as MUISelect, SelectProps } from '@mui/material';

const Select = ({ children, ...selectProps }: SelectProps) => {
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel id={`${selectProps.id}-label`}>Type</InputLabel>
      <MUISelect {...selectProps} labelId={`${selectProps.id}-label`}>
        {children}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
