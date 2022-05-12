import { SHOW_NOTIFICATION, NotificationTypes } from 'src/store/actions/index';

const showNotification = (message: string, notificationType: NotificationTypes) => {
  return {
    type: SHOW_NOTIFICATION,
    message,
    notificationType,
  };
};

export default showNotification;
