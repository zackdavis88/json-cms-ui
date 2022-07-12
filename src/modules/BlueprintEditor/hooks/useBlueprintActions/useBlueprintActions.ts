import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from 'src/store/store';

const useBlueprintActions = () => {
  const router = useRouter();
  const [backdropIsOpen, setBackdropIsOpen] = React.useState(false);
  const hasChange = useSelector(({ blueprint }: RootState) => blueprint.hasChange);
  const isUpdatePage = !!router.query.id;

  const openValidationBackdrop = () => setBackdropIsOpen(true);
  const closeValidationBackdrop = () => setBackdropIsOpen(false);
  const saveDisabled = isUpdatePage && !hasChange;

  return {
    backdropIsOpen,
    openValidationBackdrop,
    closeValidationBackdrop,
    saveDisabled,
  };
};

export default useBlueprintActions;
