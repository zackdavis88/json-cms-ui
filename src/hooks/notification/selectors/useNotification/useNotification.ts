import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';
import { NotificationState } from 'src/store/reducers/notification/notification';

function useNotification() {
  const notification: NotificationState = useSelector(
    ({ notification }: RootState) => notification,
    shallowEqual,
  );
  return notification;
}

export default useNotification;
