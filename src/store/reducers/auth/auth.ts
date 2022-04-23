import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from 'src/store/actions';

interface AuthState {
  isLoading: boolean;
  token?: string;
  user?: {
    username: string;
    displayName: string;
  };
}

interface UserData {
  username: string;
  displayName: string;
}

interface Action {
  type: string;
  response: {
    headers: {
      [key: string]: string;
    };
    body: {
      user: UserData;
    };
  };
}

type AuthReducer = (state: AuthState, action: Action) => AuthState;

const initialState = {
  isLoading: false,
  token: null,
  user: null,
};

const authReducer: AuthReducer = (state = initialState, action) => {
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
      if (typeof document === 'object') {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // expire the cookie to delete.
      }

      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
