import React from 'react';
import { Box } from '@mui/material';
import { styled, CSSObject } from '@mui/material/styles';
import { NotificationTypes } from 'src/store/actions';

interface NotificationBoxProps {
  borderRadius?: CSSObject['borderRadius'];
  children: React.ReactNode;
  flexDirection?: CSSObject['flexDirection'];
  notificationType: NotificationTypes;
  width?: CSSObject['width'];
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'notificationType' &&
    prop !== 'flexDirection' &&
    prop !== 'width' &&
    prop !== 'borderRadius',
})<NotificationBoxProps>(
  ({
    theme,
    borderRadius = theme.radii(1),
    notificationType,
    flexDirection = 'column',
    width = '500px',
  }) => {
    // default to Info colors
    const colorStyles = {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    };

    if (notificationType === 'success') {
      colorStyles.backgroundColor = theme.palette.success.main;
      colorStyles.color = theme.palette.common.white;
    } else if (notificationType === 'warning') {
      colorStyles.backgroundColor = theme.palette.warning.main;
      colorStyles.color = theme.palette.common.black;
    } else if (notificationType === 'error') {
      colorStyles.backgroundColor = theme.palette.error.main;
      colorStyles.color = theme.palette.common.white;
    }

    return {
      position: 'relative',
      display: 'flex',
      flexDirection: flexDirection,
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: borderRadius,
      margin: theme.spacing(0),
      width: width,
      minHeight: '75px',
      boxShadow: theme.shadows[5],
      transition:
        'color 300ms linear, background-color 300ms linear, height 300ms linear',
      ...colorStyles,
    };
  },
);

const NotificationBox = ({ children, ...boxProps }: NotificationBoxProps) => {
  return <StyledBox {...boxProps}>{children}</StyledBox>;
};

export default NotificationBox;
