import React from 'react';
import {
  DialogActions as MUIDialogActions,
  DialogActionsProps as MUIDialogActionsProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface DialogActionsProps extends MUIDialogActionsProps {
  children: React.ReactNode;
}

const DialogActions = ({ children }: DialogActionsProps) => {
  return <StyledDialogActions>{children}</StyledDialogActions>;
};

const StyledDialogActions = styled(MUIDialogActions)(({ theme }) => ({
  padding: `0 ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)}`,
}));

export default DialogActions;
