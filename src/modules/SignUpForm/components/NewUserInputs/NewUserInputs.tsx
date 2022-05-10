import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PasswordTextField } from 'src/components';

interface NewUserInputsProps {
  username: {
    value: string;
    error: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  password: {
    value: string;
    error: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  confirmPassword: {
    value: string;
    error: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
}

const NewUserInputs = ({ username, password, confirmPassword }: NewUserInputsProps) => {
  const theme = useTheme();
  return (
    <>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="sign-up-username"
          label="Username"
          variant="filled"
          fullWidth
          value={username.value}
          onChange={username.onChange}
          error={!!username.error}
          helperText={username.error}
          required
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <PasswordTextField
          id="sign-up-password"
          label="Password"
          variant="filled"
          fullWidth
          value={password.value}
          onChange={password.onChange}
          error={!!password.error}
          helperText={password.error}
          required
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <PasswordTextField
          id="sign-up-confirm-password"
          label="Confirm Password"
          variant="filled"
          fullWidth
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
          error={!!confirmPassword.error}
          helperText={confirmPassword.error}
          required
        />
      </Box>
    </>
  );
};

export default NewUserInputs;
