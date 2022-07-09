import React from 'react';
import { useDispatch } from 'react-redux';
import {
  createBlueprint as createBlueprintAction,
  BlueprintPayload,
} from 'src/store/actions';
import {
  useBlueprintAllFields,
  useBlueprintRootFields,
  useBlueprintName,
} from 'src/hooks';
import { buildBlueprintPayload } from 'src/utils';

interface CreateBlueprintResponse {
  body: {
    message?: string;
    error?: string;
    blueprint?: BlueprintPayload;
  };
  status: number;
}

const useDispatchCreateBlueprint = () => {
  const dispatch = useDispatch();
  const rootFields = useBlueprintRootFields();
  const allFields = useBlueprintAllFields();
  const { name } = useBlueprintName();

  const createBlueprint = React.useCallback(async () => {
    const payload = buildBlueprintPayload(name, rootFields, allFields);
    const response = (await dispatch(
      createBlueprintAction(payload),
    )) as unknown as CreateBlueprintResponse;
    return response;
  }, [rootFields, allFields, name, dispatch]);

  return createBlueprint;
};

export default useDispatchCreateBlueprint;
