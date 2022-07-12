import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  API_REQUEST,
  BlueprintPayload as _BlueprintPayload,
} from 'src/store/actions/index';

/*
  When creating a blueprint we dont need to update the state with the API payload. We also dont really
  care about the isLoading flag either in the create flow (I think.)

  For now we are going to execute NOOP operations for create. We really are just using the API middleware
  to make a fetch request, but dont want to update the blueprint state at all with this dispatcher.
*/
type BlueprintPayload = Omit<_BlueprintPayload, 'id' | 'version'>;
const createBlueprint = (payload: BlueprintPayload) => {
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
    url: '/api/blueprints',
    options: {
      method: 'POST',
    },
    payload,
  };
};

export default createBlueprint;
