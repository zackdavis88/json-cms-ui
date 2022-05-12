import React from 'react';
import { Form } from 'src/components';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SignUpFormLayoutProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

const SignUpFormLayout = ({ children, onSubmit }: SignUpFormLayoutProps) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      padding={theme.spacing(2)}
      borderRadius={`${theme.radii(1)} ${theme.radii(1)} 0px 0px`}
      border={`1px solid ${theme.palette.secondary.main}`}
    >
      <Form onSubmit={onSubmit}>{children}</Form>
    </Box>
  );
};

export default SignUpFormLayout;
