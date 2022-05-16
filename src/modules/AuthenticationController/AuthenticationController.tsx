import React from 'react';
import { BackdropLayout } from './layout';
import { useIsAuthenticated } from './hooks';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants';
import { useDispatchShowNotification } from 'src/hooks';

interface AuthenticationControllerProps {
  children: React.ReactNode;
}

const AuthenticationController = ({ children }: AuthenticationControllerProps) => {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const showNotification = useDispatchShowNotification();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router
        .push({
          pathname: ROUTES.SIGN_IN,
          query: { ...router.query, returnRoute: router.pathname },
        })
        .then(() => {
          showNotification('you must be logged in to access JSOM CMS', 'info');
        });
    }
  }, [isAuthenticated, router, showNotification]);

  return !isAuthenticated ? <BackdropLayout /> : <>{children}</>;
};

export default AuthenticationController;
