import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useBreadcrumbName(fieldId: string) {
  const name = useSelector(({ blueprint }: RootState) => {
    if (fieldId === 'root') {
      return 'Root';
    }

    return blueprint.fields[fieldId].name;
  });

  return name;
}

export default useBreadcrumbName;
