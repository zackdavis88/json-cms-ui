import { useBlueprintName } from 'src/hooks';
import { validateName } from 'src/modules/BlueprintEditor/hooks/utils';

const useValidateBlueprintName = () => {
  const { name } = useBlueprintName();

  const errorMessage = validateName(name);
  if (errorMessage) {
    return errorMessage;
  }

  return false;
};

export default useValidateBlueprintName;
