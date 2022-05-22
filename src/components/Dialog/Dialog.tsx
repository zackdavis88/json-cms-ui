import React from 'react';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MUIDialog,
  DialogProps as MUIDialogProps,
} from '@mui/material';
import { DialogActions, SlideTransition } from './components';

export interface DialogProps extends MUIDialogProps {
  title: string;
  contentText?: string | React.ReactNode;
  children: React.ReactNode;
  dialogActions?: React.ReactNode;
}

const Dialog = ({
  title,
  contentText,
  children,
  dialogActions,
  ...dialogProps
}: DialogProps) => {
  return (
    <MUIDialog TransitionComponent={SlideTransition} {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {contentText && <DialogContentText>{contentText}</DialogContentText>}
        {children}
      </DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </MUIDialog>
  );
};

export default Dialog;
