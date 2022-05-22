import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Dialog, PasswordTextField, Form } from 'src/components';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal = ({ isOpen, onClose }: ChangePasswordModalProps) => {
  const theme = useTheme();
  return (
    <Dialog
      title="Change Password"
      open={isOpen}
      onClose={onClose}
      contentText="Complete this form to change your password. These changes will take effect immediately."
      dialogActions={
        <>
          <Button type="submit" variant="contained">
            <Typography component="span" typography="button" fontWeight="bold">
              Submit
            </Typography>
          </Button>
          <Button variant="outlined" onClick={onClose}>
            <Typography component="span" typography="button">
              Cancel
            </Typography>
          </Button>
        </>
      }
    >
      <Form>
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
      </Form>
    </Dialog>
  );
};

export default ChangePasswordModal;
