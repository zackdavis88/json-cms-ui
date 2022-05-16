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

  React.useEffect(() => {
    router.events.on('routeChangeStart', hideNotification);
    return () => {
      router.events.off('routeChangeStart', hideNotification);
    };
  }, [router, hideNotification]);

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
