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
  useDispatchShowNotification,
} from 'src/hooks';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants';

interface ValidationBackdropProps {
  onAfterValidation: () => void;
}

const ValidationBackdrop = ({ onAfterValidation }: ValidationBackdropProps) => {
  const router = useRouter();
  const isUpdatePage = !!router.query.id;
  const showNotification = useDispatchShowNotification();
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
        const { body } = await save();

        if (body.error) {
          showNotification(body.error, 'error');
        } else if (body.blueprint) {
          if (isUpdatePage) {
            showNotification(body.message || 'successfully updated blueprint', 'success');
          } else {
            router.push(ROUTES.BLUEPRINTS).then(() => {
              showNotification(
                body.message || 'successfully created blueprint',
                'success',
              );
            });
          }
        }
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
    router,
    showNotification,
  ]);

  return (
    <StyledBackdrop open>
      <ValidationBackdropLayout />
    </StyledBackdrop>
  );
};

export default ValidationBackdrop;
