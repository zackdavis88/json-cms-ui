import React from 'react';
import { Form } from 'src/components';
import { Box, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBanner } from 'src/modules/LoginForm/components';

interface LoginFormLayoutProps {
  children: React.ReactNode;
  error?: string;
  onSubmit: () => void;
}

const LoginFormLayout = ({ children, error, onSubmit }: LoginFormLayoutProps) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      padding={theme.spacing(2)}
      borderRadius={`${theme.radii(1)} ${theme.radii(1)} 0px 0px`}
      border={`1px solid ${theme.palette.secondary.main}`}
    >
      <Collapse in={!!error} unmountOnExit>
        <ErrorBanner>{error}</ErrorBanner>
      </Collapse>
      <Form onSubmit={onSubmit}>{children}</Form>
    </Box>
  );
};

export default LoginFormLayout;
