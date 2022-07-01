import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintRootFields() {
  const rootFields: string[] = useSelector(
    ({ blueprint }: RootState) => blueprint.rootFields,
    shallowEqual,
  );
  return rootFields;
}

export default useBlueprintRootFields;
