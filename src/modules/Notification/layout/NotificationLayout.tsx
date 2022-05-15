import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Hidden } from 'src/components';
import { NotificationTypes } from 'src/store/actions';
import { AbsolutePositionedNotificationLayout } from './AbsolutePositionedNotificationLayout';
import { CollapsibleNotificationLayout } from './CollapsibleNotificationLayout';

interface NotificationLayoutProps {
  message: string;
  notificationType: NotificationTypes;
  onClose: () => void;
  showNotification: boolean;
}

const NotificationLayout = ({
  message,
  notificationType,
  onClose,
  showNotification,
}: NotificationLayoutProps) => {
  const theme = useTheme();
  return (
    <Box paddingTop={theme.spacing(2)}>
      <Hidden hiddenOn="lgDown">
        <AbsolutePositionedNotificationLayout
          notificationType={notificationType}
          showNotification={showNotification}
          onClose={onClose}
        >
          {message}
        </AbsolutePositionedNotificationLayout>
      </Hidden>
      <Hidden hiddenOn="lgUp">
        <CollapsibleNotificationLayout
          notificationType={notificationType}
          showNotification={showNotification}
          onClose={onClose}
        >
          {message}
        </CollapsibleNotificationLayout>
      </Hidden>
    </Box>
  );
};

export default NotificationLayout;
