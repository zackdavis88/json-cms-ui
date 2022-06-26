import React from 'react';
import { FormControl, InputLabel, Select as MUISelect, SelectProps } from '@mui/material';

const Select = ({ children, ...selectProps }: SelectProps) => {
  return (
    <FormControl variant="filled" sx={{ width: '100%' }}>
      <InputLabel id={`${selectProps.id}-label`}>Type</InputLabel>
      <MUISelect {...selectProps} labelId={`${selectProps.id}-label`}>
        {children}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
