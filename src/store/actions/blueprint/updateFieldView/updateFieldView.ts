import { BLUEPRINT_UPDATE_FIELD_VIEW } from 'src/store/actions/index';
import { BlueprintFieldView } from 'src/store/actions/blueprint/types';

const updateFieldView = (fieldView: BlueprintFieldView) => {
  return {
    type: BLUEPRINT_UPDATE_FIELD_VIEW,
    fieldView,
  };
};

export default updateFieldView;
