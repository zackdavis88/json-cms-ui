import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PasswordTextField } from 'src/components';

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
  const inputToFocus = React.useRef<HTMLInputElement>();
  React.useEffect(() => {
    if (inputToFocus.current) {
      inputToFocus.current.focus();
    }
  }, []);
  return (
    <>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <TextField
          id="login-username"
          label="Username"
          variant="filled"
          type="text"
          fullWidth
          value={username.value}
          onChange={username.onChange}
          required
          inputRef={inputToFocus}
        />
      </Box>
      <Box display="flex" width="100%" marginBottom={theme.spacing(1)}>
        <PasswordTextField
          id="login-password"
          label="Password"
          variant="filled"
          fullWidth
          value={password.value}
          onChange={password.onChange}
          required
        />
      </Box>
    </>
  );
};

export default CredentialInputs;
