import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateBlueprint as updateBlueprintAction,
  BlueprintPayload,
} from 'src/store/actions';
import {
  useBlueprintAllFields,
  useBlueprintRootFields,
  useBlueprintName,
} from 'src/hooks';
import { useRouter } from 'next/router';
import { buildBlueprintPayload } from 'src/utils';

interface UpdateBlueprintResponse {
  body: {
    message?: string;
    error?: string;
    blueprint?: BlueprintPayload;
  };
  status: number;
}

const useDispatchUpdateBlueprint = () => {
  const blueprintId = useRouter().query.id || '';
  const dispatch = useDispatch();
  const rootFields = useBlueprintRootFields();
  const allFields = useBlueprintAllFields();
  const { name } = useBlueprintName();

  const updateBlueprint = React.useCallback(async () => {
    const payload = buildBlueprintPayload(name, rootFields, allFields);
    const response = (await dispatch(
      updateBlueprintAction(blueprintId, payload),
    )) as unknown as UpdateBlueprintResponse;
    return response;
  }, [rootFields, allFields, name, dispatch, blueprintId]);

  return updateBlueprint;
};

export default useDispatchUpdateBlueprint;
