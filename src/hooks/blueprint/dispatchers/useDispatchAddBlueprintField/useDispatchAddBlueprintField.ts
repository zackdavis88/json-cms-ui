import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addBlueprintField as addBlueprintFieldAction,
  BlueprintField,
  BlueprintFieldTypes,
} from 'src/store/actions';
import { v4 as uuidv4 } from 'uuid';

const useDispatchAddBlueprintField = () => {
  const dispatch = useDispatch();

  const addBlueprintField = React.useCallback(() => {
    const newField: BlueprintField = {
      id: uuidv4(),
      name: '',
      type: BlueprintFieldTypes.STRING,
      isRequired: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
      isExpanded: true,
    };
    return dispatch(addBlueprintFieldAction(newField));
  }, [dispatch]);

  return addBlueprintField;
};

export default useDispatchAddBlueprintField;
