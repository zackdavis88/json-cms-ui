import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';
import { BlueprintField } from 'src/store/actions';

function useFieldBreadcrumbs() {
  const fieldIds: BlueprintField['id'][] = useSelector(({ blueprint }: RootState) => {
    const fieldView = blueprint.fieldView;
    const currentField = blueprint.fields[fieldView];
    let result: BlueprintField['id'][] = [];

    if (currentField) {
      result = result.concat(currentField.id);

      let parentId = currentField.parentId || '';
      let parentField = blueprint.fields[parentId];
      while (parentField) {
        result = result.concat(parentId);
        parentId = parentField.parentId || '';
        parentField = blueprint.fields[parentId];
      }
    }

    return result.reverse();
  }, shallowEqual);

  return fieldIds;
}

export default useFieldBreadcrumbs;
