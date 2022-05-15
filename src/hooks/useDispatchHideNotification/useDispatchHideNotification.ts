import React from 'react';
import { useDispatch } from 'react-redux';
import { hideNotification as hideNotificationAction } from 'src/store/actions';

const useDispatchHideNotification = () => {
  const dispatch = useDispatch();

  const hideNotification = React.useCallback(() => {
    return dispatch(hideNotificationAction());
  }, [dispatch]);

  return hideNotification;
};

export default useDispatchHideNotification;
