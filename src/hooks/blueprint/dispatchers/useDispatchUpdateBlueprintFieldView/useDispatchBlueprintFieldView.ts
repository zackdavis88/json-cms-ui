import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateBlueprintFieldView as updateBlueprintFieldViewAction,
  BlueprintFieldView,
} from 'src/store/actions';

const useDispatchUpdateBlueprintFieldView = () => {
  const dispatch = useDispatch();

  const updateBlueprintFieldView = React.useCallback(
    (fieldView: BlueprintFieldView) => {
      return dispatch(updateBlueprintFieldViewAction(fieldView));
    },
    [dispatch],
  );

  return updateBlueprintFieldView;
};

export default useDispatchUpdateBlueprintFieldView;
