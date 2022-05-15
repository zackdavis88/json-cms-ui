import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationTypes,
} from 'src/store/actions';
import { Action as ReduxAction } from '@reduxjs/toolkit';

export interface NotificationState {
  message: string;
  notificationType: NotificationTypes;
  showNotification: boolean;
}

interface NotificationAction extends ReduxAction {
  message?: string;
  notificationType?: NotificationTypes;
}

export const defaultState: NotificationState = {
  message: '',
  notificationType: 'info',
  showNotification: false,
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
        showNotification: true,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
