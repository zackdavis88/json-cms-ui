import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBlueprintName as updateBlueprintNameAction } from 'src/store/actions';

const useDispatchUpdateBlueprintName = () => {
  const dispatch = useDispatch();

  const updateBlueprintName = React.useCallback(
    (name: string) => {
      return dispatch(updateBlueprintNameAction(name));
    },
    [dispatch],
  );

  return updateBlueprintName;
};

export default useDispatchUpdateBlueprintName;
