import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintField(fieldId: string) {
  const id = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].id);
  const parentId = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].parentId,
  );
  const parentType = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[parentId || 'root']?.type,
  );
  const name = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].name);
  const type = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].type);
  const isRequired = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].isRequired,
  );
  const isInteger = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].isInteger,
  );
  const min = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].min);
  const max = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].max);
  const regex = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].regex,
  );
  const children = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].children,
    shallowEqual,
  );
  const arrayOf = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].arrayOf,
  );
  const errorType = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].errorType,
  );
  const errorMessage = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].errorMessage,
  );
  const isExpanded = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].isExpanded,
  );

  if (!id) {
    return null;
  }

  return {
    id: fieldId,
    parentId,
    parentType,
    name,
    type,
    isRequired,
    isInteger,
    min,
    max,
    regex,
    arrayOf,
    children,
    errorType,
    errorMessage,
    isExpanded,
  };
}

export default useBlueprintField;
