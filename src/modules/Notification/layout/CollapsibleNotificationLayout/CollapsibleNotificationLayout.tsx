import React from 'react';
import { NotificationBox, CloseButton } from 'src/modules/Notification/components';
import { Box, Typography, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NotificationState } from 'src/store/reducers/notification/notification';

interface CollapsibleNotificationLayoutProps extends Omit<NotificationState, 'message'> {
  children: React.ReactNode;
  onClose: () => void;
}

const CollapsibleNotificationLayout = ({
  children,
  showNotification,
  notificationType,
  onClose,
}: CollapsibleNotificationLayoutProps) => {
  const theme = useTheme();

  return (
    <Collapse in={showNotification} appear={false} unmountOnExit>
      <Box width="100%">
        <NotificationBox
          notificationType={notificationType}
          width="100%"
          flexDirection="row"
          borderRadius="none"
        >
          <Box
            width="100%"
            display="flex"
            paddingX={theme.spacing(3)}
            alignItems="center"
          >
            <Typography variant="subtitle2">{children}</Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="row-reverse"
            flex={1}
            paddingRight={theme.spacing(2)}
          >
            <CloseButton onClick={onClose} />
          </Box>
        </NotificationBox>
      </Box>
    </Collapse>
  );
};

export default CollapsibleNotificationLayout;
