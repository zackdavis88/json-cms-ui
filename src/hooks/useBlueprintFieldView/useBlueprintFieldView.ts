import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useBlueprintFieldView() {
  const fieldView = useSelector(({ blueprint }: RootState) => blueprint.fieldView);
  return fieldView;
}

export default useBlueprintFieldView;
