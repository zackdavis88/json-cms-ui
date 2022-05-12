import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from 'src/store/actions';
import { Action } from '@reduxjs/toolkit';

interface UserState {
  isLoading: boolean;
}

export const defaultState: UserState = {
  isLoading: false,
};

type UserReducer = (state: UserState, action?: Action) => UserState;
const userReducer: UserReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
