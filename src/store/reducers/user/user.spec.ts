import reducer, { defaultState } from './user';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from 'src/store/actions';

describe('User Reducer', () => {
  it('should return the initial user state', () => {
    const expectedState = {
      isLoading: false,
    };
    expect(reducer(defaultState)).toEqual(expectedState);
  });

  it('should set isLoading to true while making requests', () => {
    const expectedState = {
      isLoading: true,
    };
    expect(reducer(defaultState, { type: USER_REQUEST })).toEqual(expectedState);
  });

  it('should set isLoading to false after a successful request', () => {
    const expectedState = {
      isLoading: false,
    };
    expect(reducer({ isLoading: true }, { type: USER_SUCCESS })).toEqual(expectedState);
  });

  it('should set isLoading to false after a failed request', () => {
    const expectedState = {
      isLoading: false,
    };
    expect(reducer({ isLoading: true }, { type: USER_FAILURE })).toEqual(expectedState);
  });
});
