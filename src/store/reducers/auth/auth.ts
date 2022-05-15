import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, SIGN_OUT } from 'src/store/actions';
import { TOKEN_HEADER } from 'src/constants';
import { Action as ReduxAction } from '@reduxjs/toolkit';

export interface UserData {
  username: string;
  displayName: string;
}

interface AuthState {
  isLoading: boolean;
  token: string | null;
  user: UserData | null;
}

interface AuthAction extends ReduxAction {
  response?: {
    headers: {
      [key: string]: string;
    };
    body: {
      user?: UserData;
    };
  };
}

export const defaultState: AuthState = {
  isLoading: false,
  token: null,
  user: null,
};

export const defaultAction: AuthAction = {
  type: '',
  response: { headers: {}, body: {} },
};

type AuthReducer = (state: AuthState, action: AuthAction) => AuthState;
const authReducer: AuthReducer = (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      if (typeof document === 'object' && action.response) {
        const expires = new Date(Date.now() + 1000 * 60 * 60 * 8).toUTCString();
        document.cookie = `token=${action.response.headers[TOKEN_HEADER]}; expires=${expires}; path=/`;
      }

      return {
        ...state,
        isLoading: false,
        token: action.response ? action.response.headers[TOKEN_HEADER] : null,
        user:
          action.response && action.response.body.user ? action.response.body.user : null,
      };
    case SIGN_OUT:
    case AUTH_FAILURE:
      // lets just return the user to the defaultState on failure for now...prolly good enough.
      if (typeof document === 'object') {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // expire the cookie to delete.
      }

      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default authReducer;
