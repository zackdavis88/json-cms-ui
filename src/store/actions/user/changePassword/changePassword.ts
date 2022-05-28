import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  API_REQUEST,
} from 'src/store/actions/index';

const changePassword = (username: string, currentPassword: string, password: string) => {
  return {
    type: API_REQUEST,
    reducerTypes: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    url: `/api/users/${username}`,
    options: {
      method: 'POST',
    },
    payload: {
      currentPassword,
      password,
    },
  };
};

export default changePassword;
