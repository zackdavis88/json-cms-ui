import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';
import { BlueprintField } from 'src/store/actions';

interface AllFields {
  [key: string]: BlueprintField;
}

function useBlueprintAllFields() {
  // TODO: I dont think the shallowEqual does much here but its better than nothing.
  const fields: AllFields = useSelector(
    ({ blueprint }: RootState) => blueprint.fields,
    shallowEqual,
  );
  return fields;
}

export default useBlueprintAllFields;
