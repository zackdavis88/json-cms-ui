import { BLUEPRINT_UPDATE_FIELD_ERROR } from 'src/store/actions/index';
import { BlueprintField } from 'src/store/actions/blueprint/types';

const updateFieldError = (field: BlueprintField) => {
  return {
    type: BLUEPRINT_UPDATE_FIELD_ERROR,
    field,
  };
};

export default updateFieldError;
