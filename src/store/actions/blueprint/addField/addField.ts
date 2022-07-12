import { BLUEPRINT_ADD_FIELD } from 'src/store/actions/index';
import { BlueprintField } from 'src/store/actions/blueprint/types';

const addField = (field: BlueprintField) => {
  return {
    type: BLUEPRINT_ADD_FIELD,
    field,
  };
};

export default addField;
