import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  API_REQUEST,
} from 'src/store/actions/index';

const getBlueprint = (blueprintId: string | string[]) => {
  return {
    type: API_REQUEST,
    reducerTypes: [BLUEPRINT_REQUEST, BLUEPRINT_SUCCESS, BLUEPRINT_FAILURE],
    url: `/api/blueprints/${blueprintId}`,
    options: {
      method: 'GET',
    },
  };
};

export default getBlueprint;
