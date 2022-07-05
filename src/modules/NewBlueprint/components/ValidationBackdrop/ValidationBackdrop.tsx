import React from 'react';
import { StyledBackdrop } from './components';
import { ValidationBackdropLayout } from './layout';
import {
  useValidateBlueprintName,
  useValidateBlueprintFields,
} from 'src/modules/NewBlueprint/hooks';
import { BlueprintField } from 'src/store/actions';

interface OnValidationErrorInput {
  nameError?: string;
  fieldError?: BlueprintField;
  rootFieldsError?: string;
}

interface ValidationBackdropProps {
  onAfterValidation: (input: OnValidationErrorInput) => void;
}

const ValidationBackdrop = ({ onAfterValidation }: ValidationBackdropProps) => {
  const nameError = useValidateBlueprintName();
  const fieldError = useValidateBlueprintFields();
  /*
    calling onAfterValidation will lead to state updates for a field object...but if the state updates
    then the useValidateBlueprintFields hook will rerun because allFields is updating...

    So we need to ensure that once we report back the validation error that we no longer call for a state update again.

    This resultsSubmitted ref should track that and once validation truly finishes this component unmounts, meaning the ref 
    will reset on each save.
  */
  const validationErrorSubmitted = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (nameError && !validationErrorSubmitted.current) {
      onAfterValidation({ nameError });
      validationErrorSubmitted.current = true;
    } else if (fieldError && !validationErrorSubmitted.current) {
      if (typeof fieldError === 'string') {
        onAfterValidation({ rootFieldsError: fieldError });
      } else {
        onAfterValidation({ fieldError });
      }
      validationErrorSubmitted.current = true;
    }

    if (!nameError && !fieldError && !validationErrorSubmitted.current) {
      onAfterValidation({});
    }
  }, [nameError, fieldError, onAfterValidation]);

  return (
    <StyledBackdrop open>
      <ValidationBackdropLayout />
    </StyledBackdrop>
  );
};

export default ValidationBackdrop;
