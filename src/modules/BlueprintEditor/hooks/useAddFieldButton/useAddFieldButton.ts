import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { BlueprintFieldTypes } from 'src/store/actions';

function useAddFieldButton() {
  const disabled = useSelector(({ blueprint }: RootState) => {
    const fieldView = blueprint.fieldView;
    const field = blueprint.fields[fieldView];

    if (field && field.type === BlueprintFieldTypes.ARRAY && field.arrayOf) {
      return true;
    }

    return false;
  });

  return { disabled };
}

export default useAddFieldButton;
