import { BLUEPRINT_REMOVE_FIELD } from 'src/store/actions/index';
import { BlueprintField } from 'src/store/actions/blueprint/types';

const removeField = (field: BlueprintField) => {
  return {
    type: BLUEPRINT_REMOVE_FIELD,
    field,
  };
};

export default removeField;
