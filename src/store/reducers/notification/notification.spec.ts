import reducer, { defaultState, defaultAction } from './notification';
import { showNotification, hideNotification, NotificationTypes } from 'src/store/actions';

describe('Notification Reducer', () => {
  it('should return the initial notification state', () => {
    const expectedState = {
      message: '',
      notificationType: 'info',
      showNotification: false,
    };
    expect(reducer(defaultState, defaultAction)).toEqual(expectedState);
  });

  it('should set the notification data with the showNotification action', () => {
    const expectedState = {
      message: 'this is a test message',
      notificationType: 'success',
      showNotification: true,
    };
    expect(
      reducer(defaultState, showNotification('this is a test message', 'success')),
    ).toEqual(expectedState);
  });

  it('should set showNotification to false with the hideNotification action', () => {
    const existingState = {
      message: 'This is a notification that is existing in the state',
      notificationType: 'error' as NotificationTypes,
      showNotification: true,
    };
    const expectedState = {
      message: 'This is a notification that is existing in the state',
      notificationType: 'error' as NotificationTypes,
      showNotification: false,
    };
    expect(reducer(existingState, hideNotification())).toEqual(expectedState);
  });
});
