import React from 'react';
import { NewBlueprintLayout } from './layout';
import { BlueprintFields, LoadingBackdrop } from './components';

const NewBlueprint = () => {
  const focusInput = React.useRef<HTMLInputElement>();
  const [backdropIsOpen, setBackdropIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  const handleBackdropOpen = () => {
    setBackdropIsOpen(true);
  };

  const handleBackdropClose = () => {
    setBackdropIsOpen(false);
  };

  return (
    <>
      <NewBlueprintLayout
        nameInputRef={focusInput}
        handleBackdropOpen={handleBackdropOpen}
      >
        <BlueprintFields />
      </NewBlueprintLayout>
      <LoadingBackdrop
        isOpen={backdropIsOpen}
        handleBackdropClose={handleBackdropClose}
      />
    </>
  );
};

export default NewBlueprint;
