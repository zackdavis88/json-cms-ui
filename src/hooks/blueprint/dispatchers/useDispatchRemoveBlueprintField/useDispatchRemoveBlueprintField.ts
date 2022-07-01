import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeBlueprintField as removeBlueprintFieldAction,
  BlueprintField,
} from 'src/store/actions';

const useDispatchRemoveBlueprintField = () => {
  const dispatch = useDispatch();

  const removeBlueprintField = React.useCallback(
    (field: BlueprintField) => {
      return dispatch(removeBlueprintFieldAction(field));
    },
    [dispatch],
  );

  return removeBlueprintField;
};

export default useDispatchRemoveBlueprintField;
