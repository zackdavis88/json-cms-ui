import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBlueprintNameError as updateBlueprintNameErrorAction } from 'src/store/actions';

const useDispatchUpdateBlueprintNameError = () => {
  const dispatch = useDispatch();

  const updateBlueprintNameError = React.useCallback(
    (nameError: string) => {
      return dispatch(updateBlueprintNameErrorAction(nameError));
    },
    [dispatch],
  );

  return updateBlueprintNameError;
};

export default useDispatchUpdateBlueprintNameError;
