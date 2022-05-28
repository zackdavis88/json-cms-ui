import React from 'react';
import { Dialog } from 'src/components';
import { ChangePasswordForm } from './components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal = ({ isOpen, onClose }: ChangePasswordModalProps) => {
  const theme = useTheme();
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      title="Change Password"
      open={isOpen}
      onClose={onClose}
      contentText="Complete this form to change your password. These changes will take effect immediately."
      fullScreen={isSmallBreakpoint}
    >
      <ChangePasswordForm handleModalClose={onClose} />
    </Dialog>
  );
};

export default ChangePasswordModal;
