import React from 'react';
import { useDispatch } from 'react-redux';
import {
  showNotification as showNotificationAction,
  NotificationTypes,
} from 'src/store/actions';

const useDispatchShowNotification = () => {
  const dispatch = useDispatch();

  const showNotification = React.useCallback(
    (message: string, notificationType: NotificationTypes) => {
      return dispatch(showNotificationAction(message, notificationType));
    },
    [dispatch],
  );

  return showNotification;
};

export default useDispatchShowNotification;
