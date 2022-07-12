import { BLUEPRINT_UPDATE_FIELD } from 'src/store/actions/index';
import { BlueprintField } from 'src/store/actions/blueprint/types';

const updateField = (field: BlueprintField) => {
  return {
    type: BLUEPRINT_UPDATE_FIELD,
    field,
  };
};

export default updateField;
