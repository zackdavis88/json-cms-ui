import React from 'react';
import { NewBlueprintLayout } from './layout';
import { BlueprintFields } from './components';
import { useDispatchResetBlueprintState } from 'src/hooks';

const NewBlueprint = () => {
  const focusInput = React.useRef<HTMLInputElement>();
  const resetBlueprintState = useDispatchResetBlueprintState();

  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }

    return () => {
      resetBlueprintState();
    };
  }, [resetBlueprintState]);

  return (
    <NewBlueprintLayout nameInputRef={focusInput}>
      <BlueprintFields />
    </NewBlueprintLayout>
  );
};

export default NewBlueprint;
