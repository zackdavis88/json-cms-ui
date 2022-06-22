import React from 'react';
import { NewBlueprintLayout } from './layout';
import { BlueprintFields } from './components';

const NewBlueprint = () => {
  const focusInput = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  return (
    <NewBlueprintLayout nameInputRef={focusInput}>
      <BlueprintFields />
    </NewBlueprintLayout>
  );
};

export default NewBlueprint;
