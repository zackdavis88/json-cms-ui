import React from 'react';
import { BlueprintEditorLayout } from './layout';
import { BlueprintFields } from './components';
import { useDispatchResetBlueprintState } from 'src/hooks';
import { useRouter } from 'next/router';
import { useGetBlueprintById } from './hooks';
import { Box, CircularProgress } from '@mui/material';

const BlueprintEditor = () => {
  const focusInput = React.useRef<HTMLInputElement>();
  const resetBlueprintState = useDispatchResetBlueprintState();
  const router = useRouter();
  const blueprintId = router.query.id;
  const isUpdatePage = !!blueprintId;
  const isLoading = useGetBlueprintById(blueprintId);

  // Wipes the state clean after the BlueprintEditor unmounts.
  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }

    return () => {
      resetBlueprintState();
    };
  }, [resetBlueprintState]);

  return !isLoading ? (
    <BlueprintEditorLayout isUpdatePage={isUpdatePage} nameInputRef={focusInput}>
      <BlueprintFields />
    </BlueprintEditorLayout>
  ) : (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default BlueprintEditor;
