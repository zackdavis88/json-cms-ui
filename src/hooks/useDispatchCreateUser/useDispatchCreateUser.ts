import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser as createUserAction } from 'src/store/actions';

interface CreateUserResponse {
  body: {
    message?: string;
    error?: string;
  };
  status: number;
}

const useDispatchCreateUser = () => {
  const dispatch = useDispatch();

  const createUser = React.useCallback(
    async (username: string, password: string) => {
      const response = (await dispatch(
        createUserAction(username, password),
      )) as unknown as CreateUserResponse;
      return response;
    },
    [dispatch],
  );

  return createUser;
};

export default useDispatchCreateUser;
