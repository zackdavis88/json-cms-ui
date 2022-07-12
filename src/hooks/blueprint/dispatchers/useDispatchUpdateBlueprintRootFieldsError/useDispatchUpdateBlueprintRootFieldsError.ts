import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBlueprintRootFieldsError as updateBlueprintRootFieldsErrorAction } from 'src/store/actions';

const useDispatchUpdateBlueprintRootFieldsError = () => {
  const dispatch = useDispatch();

  const updateBlueprintRootFieldsError = React.useCallback(
    (rootFieldsError: string) => {
      return dispatch(updateBlueprintRootFieldsErrorAction(rootFieldsError));
    },
    [dispatch],
  );

  return updateBlueprintRootFieldsError;
};

export default useDispatchUpdateBlueprintRootFieldsError;
