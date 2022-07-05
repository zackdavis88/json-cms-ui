import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  API_REQUEST,
  BlueprintPayload,
} from 'src/store/actions/index';

const createBlueprint = (payload: BlueprintPayload) => {
  return {
    type: API_REQUEST,
    reducerTypes: [BLUEPRINT_REQUEST, BLUEPRINT_SUCCESS, BLUEPRINT_FAILURE],
    url: '/api/blueprints',
    options: {
      method: 'POST',
    },
    payload,
  };
};

export default createBlueprint;
