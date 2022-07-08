import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  API_REQUEST,
  BlueprintPayload,
} from 'src/store/actions/index';

const updateBlueprint = (
  blueprintId: string | string[] | undefined,
  payload: BlueprintPayload,
) => {
  const BLUEPRINT_REQUEST_NOOP = `${BLUEPRINT_REQUEST}_NOOP`;
  const BLUEPRINT_SUCCESS_NOOP = `${BLUEPRINT_SUCCESS}_NOOP`;
  const BLUEPRINT_FAILURE_NOOP = `${BLUEPRINT_FAILURE}_NOOP`;
  return {
    type: API_REQUEST,
    reducerTypes: [
      BLUEPRINT_REQUEST_NOOP,
      BLUEPRINT_SUCCESS_NOOP,
      BLUEPRINT_FAILURE_NOOP,
    ],
    url: `/api/blueprints/${blueprintId}`,
    options: {
      method: 'POST',
    },
    payload,
  };
};

export default updateBlueprint;
