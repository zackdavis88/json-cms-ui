import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="sign-up-password"
          label="Password"
          variant="filled"
          type="password"
          fullWidth
          value={password.value}
          onChange={password.onChange}
          error={!!password.error}
          helperText={password.error}
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="sign-up-confirm-password"
          label="Confirm Password"
          variant="filled"
          type="password"
          fullWidth
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
          error={!!confirmPassword.error}
          helperText={confirmPassword.error}
        />
      </Box>
    </>
  );
};

export default NewUserInputs;
