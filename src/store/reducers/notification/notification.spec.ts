import reducer, { defaultState, defaultAction } from './notification';
import { showNotification, hideNotification, NotificationTypes } from 'src/store/actions';

describe('Notification Reducer', () => {
  it('should return the initial notification state', () => {
    const expectedState = {
      message: '',
      notificationType: 'info',
    };
    expect(reducer(defaultState, defaultAction)).toEqual(expectedState);
  });

  it('should set the message and notificationType with the showNotification action', () => {
    const expectedState = {
      message: 'this is a test message',
      notificationType: 'success',
    };
    expect(
      reducer(defaultState, showNotification('this is a test message', 'success')),
    ).toEqual(expectedState);
  });

  it('should clear the message with the hideNotification action', () => {
    const existingState = {
      message: 'This is a notification that is existing in the state',
      notificationType: 'error' as NotificationTypes,
    };
    const expectedState = {
      message: '',
      notificationType: 'error' as NotificationTypes,
    };
    expect(reducer(existingState, hideNotification())).toEqual(expectedState);
  });
});
