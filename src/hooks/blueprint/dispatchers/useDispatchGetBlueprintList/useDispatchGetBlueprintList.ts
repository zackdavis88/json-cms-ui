import React from 'react';
import { useDispatch } from 'react-redux';
import { getBlueprintList as getBlueprintListAction } from 'src/store/actions';

interface GetBlueprintListResponse {
  body: {
    message?: string;
    error?: string;
    blueprints?: {
      id: string;
      name: string;
    }[];
  };
  status: number;
}

const useDispatchGetBlueprintList = () => {
  const dispatch = useDispatch();

  const getBlueprintList = React.useCallback(async () => {
    const response = (await dispatch(
      getBlueprintListAction(),
    )) as unknown as GetBlueprintListResponse;
    return response;
  }, [dispatch]);

  return getBlueprintList;
};

export default useDispatchGetBlueprintList;
