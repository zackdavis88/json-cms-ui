import React from 'react';
import {
  FormControlLabel,
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from '@mui/material';

interface CheckboxProps extends MUICheckboxProps {
  label: string;
}

const Checkbox = ({ label, ...checkboxProps }: CheckboxProps) => {
  return <FormControlLabel control={<MUICheckbox {...checkboxProps} />} label={label} />;
};

export default Checkbox;
