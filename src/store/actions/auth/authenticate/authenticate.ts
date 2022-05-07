import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  API_REQUEST,
} from 'src/store/actions/index';

const authenticate = (username: string, password: string) => {
  return {
    type: API_REQUEST,
    reducerTypes: [AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE],
    url: '/api/auth',
    options: {
      headers: {
        'x-auth-basic': `Basic ${Buffer.from(`${username}:${password}`).toString(
          'base64',
        )}`,
      },
    },
  };
};

export default authenticate;
