import React from 'react';
import { NotificationLayout } from './layout';
import { useNotification } from './hooks';
import { useDispatchHideNotification } from 'src/hooks';
import { useRouter } from 'next/router';

/* TODO: Possible enhancements include: timed notifications that auto close and notifications that stay open
         until explicitly closed.
*/
const Notification = () => {
  const { message, notificationType, showNotification } = useNotification();
  const hideNotification = useDispatchHideNotification();
  const router = useRouter();
  const currentRoute = React.useRef<string>(router.pathname);

  // Close open nofitifcations on route change.
  React.useEffect(() => {
    if (currentRoute.current && router.pathname !== currentRoute.current) {
      hideNotification();
      currentRoute.current = router.pathname;
    }
  }, [hideNotification, router]);

  const handleClose = React.useCallback(() => {
    hideNotification();
  }, [hideNotification]);

  return (
    <NotificationLayout
      message={message}
      notificationType={notificationType}
      onClose={handleClose}
      showNotification={showNotification}
    />
  );
};

export default Notification;
