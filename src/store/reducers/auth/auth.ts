import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from 'src/store/actions';

const initialState: {
  isLoading: boolean;
  token?: string;
  user?: {
    username: string;
    displayName: string;
  };
} = {
  isLoading: false,
  token: null,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      if (typeof document === 'object') {
        const expires = new Date(Date.now() + 1000 * 60 * 60 * 8).toUTCString();
        document.cookie = `token=${action.response.headers['x-auth-token']}; expires=${expires}; path=/`;
      }
      return {
        ...state,
        isLoading: false,
        token: action.response.headers['x-auth-token'],
        user: action.response.body.user,
      };
    case AUTH_FAILURE:
      // lets just return the user to the initialState on failure for now...prolly good enough.
      if (typeof document === 'object')
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // expire the cookie to delete.
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
