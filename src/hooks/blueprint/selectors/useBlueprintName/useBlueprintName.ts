import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintName() {
  const name = useSelector(({ blueprint }: RootState) => blueprint.name);
  return name;
}

export default useBlueprintName;
