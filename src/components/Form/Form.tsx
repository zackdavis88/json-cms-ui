import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface FormProps extends BoxProps {
  acceptCharset?: string;
  action?: string;
  autoComplete?: string;
  children: React.ReactNode;
  encType?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  onSubmit?: () => void;
  target?: string;
}

const Form = ({
  acceptCharset,
  action,
  autoComplete = 'off',
  children,
  encType,
  method,
  name,
  noValidate = true,
  onSubmit,
  target,
  ...boxProps
}: FormProps) => {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit],
  );
  return (
    <form
      acceptCharset={acceptCharset}
      action={action}
      autoComplete={autoComplete}
      encType={encType}
      method={method}
      name={name}
      noValidate={noValidate}
      onSubmit={handleSubmit}
      target={target}
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap" {...boxProps}>
        {children}
      </Box>
    </form>
  );
};

export default Form;
