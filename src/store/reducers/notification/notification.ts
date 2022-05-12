import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationTypes,
} from 'src/store/actions';
import { Action as ReduxAction } from '@reduxjs/toolkit';

interface NotificationState {
  message: string;
  notificationType: NotificationTypes;
}

interface NotificationAction extends ReduxAction {
  message?: string;
  notificationType?: NotificationTypes;
}

export const defaultState: NotificationState = {
  message: '',
  notificationType: 'info',
};

export const defaultAction: NotificationAction = {
  type: '',
  message: '',
  notificationType: 'info',
};

type NotificationReducer = (
  state: NotificationState,
  action: NotificationAction,
) => NotificationState;
const notificationReducer: NotificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        message: action.message || '',
        notificationType: action.notificationType || 'info',
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export default notificationReducer;
