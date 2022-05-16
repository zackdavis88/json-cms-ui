import React from 'react';
import { Backdrop as MUIBackdrop, BackdropProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBackdrop = styled(MUIBackdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Backdrop = ({ children, ...backdropProps }: BackdropProps) => {
  return <StyledBackdrop {...backdropProps}>{children}</StyledBackdrop>;
};

export default Backdrop;
