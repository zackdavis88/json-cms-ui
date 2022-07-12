import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { BlueprintFieldErrorTypes, BlueprintFieldTypes } from 'src/store/actions';

const useFieldsMessageError = () => {
  const errorMessage = useSelector(({ blueprint }: RootState) => {
    const fieldView = blueprint.fieldView;
    if (fieldView === 'root') {
      return blueprint.rootFieldsError || false;
    }

    const fieldViewField = blueprint.fields[fieldView];
    if (
      fieldViewField.errorType === BlueprintFieldErrorTypes.CHILDREN &&
      fieldViewField.type === BlueprintFieldTypes.ARRAY
    ) {
      return 'Array fields require one nested field, use the Add Field button.';
    }

    if (
      fieldViewField.errorType === BlueprintFieldErrorTypes.CHILDREN &&
      fieldViewField.type === BlueprintFieldTypes.OBJECT
    ) {
      return 'Object fields require at least one nested field, use the Add Field button.';
    }

    return false;
  });

  return errorMessage;
};

export default useFieldsMessageError;
