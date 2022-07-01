import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintAllFields() {
  // TODO: I dont think the shallowEqual does much here but its better than nothing.
  const fields = useSelector(
    ({ blueprint }: RootState) => blueprint.fields,
    shallowEqual,
  );
  return fields;
}

export default useBlueprintAllFields;
