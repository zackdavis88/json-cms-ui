import React from 'react';
import { StyledBackdrop } from './components';
import { ValidationBackdropLayout } from './layout';
import {
  useValidateBlueprintName,
  useValidateBlueprintFields,
} from 'src/modules/NewBlueprint/hooks';
import { BlueprintField } from 'src/store/actions';

interface ValidationBackdropProps {
  onValidationError: (errorMessage: string | BlueprintField) => void;
}

const ValidationBackdrop = ({ onValidationError }: ValidationBackdropProps) => {
  const nameError = useValidateBlueprintName();
  const fieldError = useValidateBlueprintFields();
  /*
    calling onValidationError will lead to state updates for a field object...but if the state updates
    then the useValidatieBlueprintFields will rerun because allFields is updating...

    So we need to ensure that once we report back the validation error that we no longer call for a state update again.

    This resultsSubmitted ref should track that and once validation truly finishes this component unmounts, meaning the ref 
    will reset on each save.
  */
  const resultsSubmitted = React.useRef<boolean>(false);
  React.useEffect(() => {
    if (nameError && !resultsSubmitted.current) {
      onValidationError(nameError);
      resultsSubmitted.current = true;
    } else if (fieldError && !resultsSubmitted.current) {
      onValidationError(fieldError);
      resultsSubmitted.current = true;
    }
  }, [nameError, fieldError, onValidationError]);

  return (
    <StyledBackdrop open>
      <ValidationBackdropLayout />
    </StyledBackdrop>
  );
};

export default ValidationBackdrop;
