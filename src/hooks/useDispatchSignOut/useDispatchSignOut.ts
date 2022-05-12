import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut as signOutAction } from 'src/store/actions';

const useDispatchSignOut = () => {
  const dispatch = useDispatch();

  const signOut = React.useCallback(() => {
    dispatch(signOutAction());
  }, [dispatch]);

  return signOut;
};

export default useDispatchSignOut;
