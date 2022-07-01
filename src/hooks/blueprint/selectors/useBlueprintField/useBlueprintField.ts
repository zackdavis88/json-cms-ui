import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintField(fieldId: string) {
  const id = useSelector(({ blueprint }: RootState) => blueprint.fields[fieldId].id);
  const parentId = useSelector(
    ({ blueprint }: RootState) => blueprint.fields[fieldId].parentId,
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

  if (!id) {
    return null;
  }

  return {
    id: fieldId,
    parentId,
    name,
    type,
    isRequired,
    isInteger,
    min,
    max,
    regex,
    arrayOf,
    children,
  };
}

export default useBlueprintField;
