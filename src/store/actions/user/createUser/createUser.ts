import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  API_REQUEST,
} from 'src/store/actions/index';

const createUser = (username: string, password: string) => {
  return {
    type: API_REQUEST,
    reducerTypes: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    url: '/api/users',
    options: {
      method: 'POST',
    },
    payload: {
      username,
      password,
    },
  };
};

export default createUser;
