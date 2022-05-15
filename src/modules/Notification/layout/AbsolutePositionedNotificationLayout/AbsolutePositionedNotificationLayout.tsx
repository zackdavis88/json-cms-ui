import React from 'react';
import {
  AbsoluteWrapper,
  NotificationBox,
  CloseButton,
} from 'src/modules/Notification/components';
import { Box, Typography, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NotificationState } from 'src/store/reducers/notification/notification';

interface AbsolutePositionedNotificationLayoutProps
  extends Omit<NotificationState, 'message'> {
  children: React.ReactNode;
  onClose: () => void;
}

const AbsolutePositionedNotificationLayout = ({
  children,
  showNotification,
  notificationType,
  onClose,
}: AbsolutePositionedNotificationLayoutProps) => {
  const theme = useTheme();

  return (
    <AbsoluteWrapper>
      <Slide in={showNotification} appear={false} unmountOnExit>
        <Box>
          <NotificationBox notificationType={notificationType}>
            <Box
              width="100%"
              display="flex"
              flexDirection="row-reverse"
              paddingTop={theme.spacing(1)}
              paddingRight={theme.spacing(1)}
            >
              <CloseButton onClick={onClose} />
            </Box>
            <Box
              width="100%"
              display="flex"
              flex={1}
              paddingX={theme.spacing(1)}
              paddingBottom={theme.spacing(1)}
              alignItems="center"
            >
              <Typography variant="subtitle2">{children}</Typography>
            </Box>
          </NotificationBox>
        </Box>
      </Slide>
    </AbsoluteWrapper>
  );
};

export default AbsolutePositionedNotificationLayout;
