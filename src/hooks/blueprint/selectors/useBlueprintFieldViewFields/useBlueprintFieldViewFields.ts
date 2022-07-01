import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';
import { BlueprintFieldView, BlueprintFieldTypes } from 'src/store/actions';

function useBlueprintFieldViewFields() {
  const fieldView: BlueprintFieldView = useSelector(
    ({ blueprint }: RootState) => blueprint.fieldView,
  );

  const fields: string[] = useSelector(({ blueprint }: RootState) => {
    const field = blueprint.fields[fieldView];
    if (field && field.type === BlueprintFieldTypes.ARRAY) {
      const children: string[] = field.arrayOf ? [field.arrayOf] : [];
      return children;
    } else if (field && field.type === BlueprintFieldTypes.OBJECT) {
      return field.children;
    }

    return blueprint.rootFields;
  }, shallowEqual);

  return fields;
}

export default useBlueprintFieldViewFields;
