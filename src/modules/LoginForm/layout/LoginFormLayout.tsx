import React from 'react';
import { Form } from 'src/components';
import { Box, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="64px"
          bgcolor={theme.palette.error.main}
          color={theme.palette.common.white}
          borderRadius={`${theme.radii(1)} ${theme.radii(1)} 0px 0px`}
          border={`1px solid ${theme.palette.error.dark}`}
          marginBottom={theme.spacing(1)}
        >
          {error}
        </Box>
      </Collapse>
      <Form onSubmit={onSubmit}>{children}</Form>
    </Box>
  );
};

export default LoginFormLayout;
