import reducer, { defaultState, defaultAction } from './auth';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, SIGN_OUT } from 'src/store/actions';
import { TOKEN_HEADER } from 'src/constants';

describe('Auth Reducer', () => {
  it('should return the initial auth state', () => {
    const expectedState = {
      isLoading: false,
      token: null,
      user: null,
    };
    expect(reducer(defaultState, defaultAction)).toEqual(expectedState);
  });

  it('should set isLoading to true while making requests', () => {
    const expectedState = {
      isLoading: true,
      token: null,
      user: null,
    };
    expect(reducer(defaultState, { type: AUTH_REQUEST })).toEqual(expectedState);
  });

  it('should set token and user data after a successful request', () => {
    const mockSuccessResponse = {
      headers: {
        [TOKEN_HEADER]: 'unit-test-token',
      },
      body: {
        user: {
          username: 'unit test user',
          displayName: 'Unit Test User',
        },
      },
    };
    const expectedState = {
      isLoading: false,
      token: mockSuccessResponse.headers[TOKEN_HEADER],
      user: {
        username: mockSuccessResponse.body.user.username,
        displayName: mockSuccessResponse.body.user.displayName,
      },
    };
    expect(
      reducer(defaultState, { type: AUTH_SUCCESS, response: mockSuccessResponse }),
    ).toEqual(expectedState);
  });

  it('should clear token and user data after a failed request', () => {
    const existingState = {
      isLoading: false,
      token: 'this is a token',
      user: {
        username: 'this is a username',
        displayName: 'this is a display name',
      },
    };
    const expectedState = {
      isLoading: false,
      token: null,
      user: null,
    };
    expect(reducer(existingState, { type: AUTH_FAILURE })).toEqual(expectedState);
  });

  it('should clear token and user data after sign out', () => {
    const existingState = {
      isLoading: false,
      token: 'this is a token that exists in the reducer state',
      user: {
        username: 'a user',
        displayName: 'A uSeR',
      },
    };
    const expectedState = {
      isLoading: false,
      token: null,
      user: null,
    };
    expect(reducer(existingState, { type: SIGN_OUT })).toEqual(expectedState);
  });
});
