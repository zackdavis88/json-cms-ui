import React from 'react';
import { StyledBackdrop } from './components';
import { ValidationBackdropLayout } from './layout';
import {
  useValidateBlueprintName,
  useValidateBlueprintFields,
} from 'src/modules/BlueprintEditor/hooks';
import {
  useDispatchCreateBlueprint,
  useDispatchUpdateBlueprint,
  useDispatchUpdateBlueprintNameError,
  useDispatchUpdateBlueprintRootFieldsError,
  useDispatchUpdateBlueprintFieldError,
} from 'src/hooks';
import { useRouter } from 'next/router';

interface ValidationBackdropProps {
  onAfterValidation: () => void;
}

const ValidationBackdrop = ({ onAfterValidation }: ValidationBackdropProps) => {
  const isUpdatePage = !!useRouter().query.id;
  const nameError = useValidateBlueprintName();
  const fieldError = useValidateBlueprintFields();
  const createBlueprint = useDispatchCreateBlueprint();
  const updateBlueprint = useDispatchUpdateBlueprint();
  const updateBlueprintNameError = useDispatchUpdateBlueprintNameError();
  const updateBlueprintFieldError = useDispatchUpdateBlueprintFieldError();
  const updateBlueprintRootFieldsError = useDispatchUpdateBlueprintRootFieldsError();
  /*
    calling error dispatchers will lead to state updates for a field object...but if the state updates
    then the useValidateBlueprintFields hook will rerun because allFields is updating...

    So we need to ensure that once we report back the validation error that we no longer call for a state update again.

    This resultsSubmitted ref should track that and once validation truly finishes this component unmounts, meaning the ref 
    will reset on each save.
  */
  const validationErrorSubmitted = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (nameError && !validationErrorSubmitted.current) {
      updateBlueprintNameError(nameError);
      validationErrorSubmitted.current = true;
    } else if (fieldError && !validationErrorSubmitted.current) {
      if (typeof fieldError === 'string') {
        updateBlueprintRootFieldsError(fieldError);
      } else {
        updateBlueprintFieldError(fieldError);
      }
      validationErrorSubmitted.current = true;
    }

    if (!nameError && !fieldError && !validationErrorSubmitted.current) {
      const saveBlueprint = async () => {
        const save = isUpdatePage ? updateBlueprint : createBlueprint;
        const response = await save();
        console.log(response);
      };
      saveBlueprint();
    }

    onAfterValidation();
  }, [
    isUpdatePage,
    nameError,
    fieldError,
    onAfterValidation,
    createBlueprint,
    updateBlueprint,
    updateBlueprintFieldError,
    updateBlueprintNameError,
    updateBlueprintRootFieldsError,
  ]);

  return (
    <StyledBackdrop open>
      <ValidationBackdropLayout />
    </StyledBackdrop>
  );
};

export default ValidationBackdrop;
