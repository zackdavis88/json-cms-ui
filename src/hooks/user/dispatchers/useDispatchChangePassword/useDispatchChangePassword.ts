import React from 'react';
import { useDispatch } from 'react-redux';
import { changePassword as changePasswordAction } from 'src/store/actions';
import { useCurrentUser } from 'src/hooks';

interface ChangePasswordResponse {
  body: {
    message?: string;
    error?: string;
  };
  status: number;
}

const useDispatchChangePassword = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const username = user?.username || '';

  const changePassword = React.useCallback(
    async (currentPassword: string, newPassword: string) => {
      if (username) {
        const response = (await dispatch(
          changePasswordAction(username, currentPassword, newPassword),
        )) as unknown as ChangePasswordResponse;
        return response;
      }

      return {} as ChangePasswordResponse;
    },
    [username, dispatch],
  );

  return changePassword;
};

export default useDispatchChangePassword;
