import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { PasswordTextField } from 'src/components';

interface FormInput {
  value: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface PasswordInputsProps {
  currentPassword: FormInput;
  newPassword: FormInput;
  confirmPassword: FormInput;
}

const PasswordInputs = ({
  currentPassword,
  newPassword,
  confirmPassword,
}: PasswordInputsProps) => {
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
          value={currentPassword.value}
          error={!!currentPassword.error}
          helperText={currentPassword.error}
          onChange={currentPassword.onChange}
        />
      </Box>
      <Box marginTop={theme.spacing(1)} width="100%">
        <PasswordTextField
          id="new-password-input"
          label="New Password"
          fullWidth
          variant="filled"
          required
          value={newPassword.value}
          error={!!newPassword.error}
          helperText={newPassword.error}
          onChange={newPassword.onChange}
        />
      </Box>
      <Box marginTop={theme.spacing(1)} width="100%">
        <PasswordTextField
          id="confirm-password-input"
          label="Confirm Password"
          fullWidth
          variant="filled"
          required
          value={confirmPassword.value}
          error={!!confirmPassword.error}
          helperText={confirmPassword.error}
          onChange={confirmPassword.onChange}
        />
      </Box>
    </>
  );
};

export default PasswordInputs;
