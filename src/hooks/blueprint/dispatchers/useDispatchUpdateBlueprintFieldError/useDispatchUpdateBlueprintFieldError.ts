import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateBlueprintFieldError as updateBlueprintFieldErrorAction,
  BlueprintField,
} from 'src/store/actions';

const useDispatchUpdateBlueprintFieldError = () => {
  const dispatch = useDispatch();

  const updateBlueprintFieldError = React.useCallback(
    (field: BlueprintField) => {
      return dispatch(updateBlueprintFieldErrorAction(field));
    },
    [dispatch],
  );

  return updateBlueprintFieldError;
};

export default useDispatchUpdateBlueprintFieldError;
