import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { PasswordTextField } from 'src/components';

const PasswordInputs = () => {
  const theme = useTheme();
  return (
    <>
      <Box marginTop={theme.spacing(2.5)} width="100%">
        <PasswordTextField
          autoFocus
          id="current-password-input"
          label="Current Password"
          fullWidth
          variant="filled"
          required
        />
      </Box>
      <Box marginTop={theme.spacing(1)} width="100%">
        <PasswordTextField
          id="new-password-input"
          label="New Password"
          fullWidth
          variant="filled"
          required
        />
      </Box>
      <Box marginTop={theme.spacing(1)} width="100%">
        <PasswordTextField
          id="confirm-password-input"
          label="Confirm Password"
          fullWidth
          variant="filled"
          required
        />
      </Box>
    </>
  );
};

export default PasswordInputs;
