import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticate as authenticateAction } from 'src/store/actions';

interface AuthenticateResponse {
  body: {
    message?: string;
    error?: string;
  };
  status: number;
}

const useAuthenticate = () => {
  const dispatch = useDispatch();

  const authenticate = React.useCallback(
    async (username: string, password: string) => {
      const response = (await dispatch(
        authenticateAction(username, password),
      )) as unknown as AuthenticateResponse;
      return response;
    },
    [dispatch],
  );

  return authenticate;
};

export default useAuthenticate;
