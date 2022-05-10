import React from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const PasswordTextField = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} fixedWidth size="sm" />
              ) : (
                <FontAwesomeIcon icon={faEye} fixedWidth size="sm" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordTextField;
