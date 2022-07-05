import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

function useBreadcrumbData(fieldId: string) {
  const breadcrumbData = useSelector(({ blueprint }: RootState) => {
    if (fieldId === 'root') {
      const hasError = blueprint.rootFields.some((fieldId) => {
        const rootField = blueprint.fields[fieldId];
        const rootFieldsError = !!blueprint.rootFieldsError;
        return !!rootFieldsError || !!rootField.errorType;
      });
      return { name: 'Root', hasError };
    }

    return {
      name: blueprint.fields[fieldId].name,
      hasError: !!blueprint.fields[fieldId].errorType,
    };
  });

  return breadcrumbData;
}

export default useBreadcrumbData;
