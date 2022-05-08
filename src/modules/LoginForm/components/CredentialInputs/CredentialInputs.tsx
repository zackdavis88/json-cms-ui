import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CredentialInputsProps {
  username: {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  password: {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
}

const CredentialInputs = ({ username, password }: CredentialInputsProps) => {
  const theme = useTheme();
  return (
    <>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="login-username"
          label="Username"
          variant="filled"
          fullWidth
          value={username.value}
          onChange={username.onChange}
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="login-password"
          label="Password"
          variant="filled"
          type="password"
          fullWidth
          value={password.value}
          onChange={password.onChange}
        />
      </Box>
    </>
  );
};

export default CredentialInputs;
