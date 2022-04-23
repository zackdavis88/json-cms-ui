/* eslint-disable indent */
import { AUTH_FAILURE } from 'src/store/actions';
import {
  Middleware,
  MiddlewareAPI,
  Dispatch,
  Action as ReduxAction,
} from '@reduxjs/toolkit';
import { RootState, AppDispatch } from 'src/store/store';

interface Action extends ReduxAction {
  types: string[];
  reqUrl: string;
  reqOptions?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const apiFetchMiddleware: Middleware =
  (store: MiddlewareAPI<AppDispatch, RootState>) =>
  (next: Dispatch) =>
  async (action: Action) => {
    if (!action.types || !Array.isArray(action.types) || action.types.length !== 3) {
      return next(action); // bail out of this middleware function if we dont have action.types with 3 types.
    }

    const { types, reqUrl, reqOptions, payload } = action;
    let options = reqOptions ? { ...reqOptions } : {};
    const [REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE] = types;
    const authToken = store.getState().auth.token;
    if (authToken) {
      options = {
        ...options,
        headers: {
          ...options.headers,
          'x-auth-token': authToken,
        },
      };
    }

    if (payload) {
      options = {
        ...options,
        body: JSON.stringify(payload),
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
        },
      };
    }

    store.dispatch({ type: REQUEST_TYPE });
    const response = await fetch(reqUrl, options);
    const body = await response.json();
    const token = response.headers.get('x-auth-token');
    const status = response.status;
    let headers = {};
    if (token) {
      headers = { 'x-auth-token': token };
    }
    if (status === 403) {
      store.dispatch({ type: AUTH_FAILURE });
      return { status, body };
    }

    if (status !== 200) {
      store.dispatch({ type: FAILURE_TYPE, error: body });
      return { status, body };
    }

    store.dispatch({ type: SUCCESS_TYPE, response: { body, headers } });
    return { status, body };
  };

export default apiFetchMiddleware;
