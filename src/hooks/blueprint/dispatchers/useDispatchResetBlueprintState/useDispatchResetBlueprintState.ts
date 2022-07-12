import React from 'react';
import { useDispatch } from 'react-redux';
import { resetBlueprintState as resetBlueprintStateAction } from 'src/store/actions';

const useDispatchResetBlueprintState = () => {
  const dispatch = useDispatch();

  const resetBlueprintState = React.useCallback(() => {
    return dispatch(resetBlueprintStateAction());
  }, [dispatch]);

  return resetBlueprintState;
};

export default useDispatchResetBlueprintState;
