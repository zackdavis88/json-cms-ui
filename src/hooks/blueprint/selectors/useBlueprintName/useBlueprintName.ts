import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintName() {
  const name = useSelector(({ blueprint }: RootState) => blueprint.name);
  const nameError = useSelector(({ blueprint }: RootState) => blueprint.nameError);
  return { name, nameError };
}

export default useBlueprintName;
