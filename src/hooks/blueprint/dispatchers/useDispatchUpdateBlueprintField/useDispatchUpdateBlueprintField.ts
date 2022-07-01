import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateBlueprintField as updateBlueprintFieldAction,
  BlueprintField,
} from 'src/store/actions';

const useDispatchUpdateBlueprintField = () => {
  const dispatch = useDispatch();

  const updateBlueprintField = React.useCallback(
    (field: BlueprintField) => {
      return dispatch(updateBlueprintFieldAction(field));
    },
    [dispatch],
  );

  return updateBlueprintField;
};

export default useDispatchUpdateBlueprintField;
