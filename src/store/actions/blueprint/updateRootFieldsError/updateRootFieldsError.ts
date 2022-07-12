import { BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR } from 'src/store/actions/index';

const updateRootFieldsError = (rootFieldsError: string) => {
  return {
    type: BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR,
    rootFieldsError,
  };
};

export default updateRootFieldsError;
