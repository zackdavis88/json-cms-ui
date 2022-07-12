import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SectionHeader } from 'src/components';
import {
  BlueprintActions,
  FieldsActions,
  NameInput,
  FieldBreadcrumbs,
} from 'src/modules/BlueprintEditor/components';

interface BlueprintEditorLayoutProps {
  children: React.ReactNode;
  isUpdatePage: boolean;
  nameInputRef: React.MutableRefObject<HTMLInputElement | undefined>;
}

const BlueprintEditorLayout = ({
  children,
  isUpdatePage,
  nameInputRef,
}: BlueprintEditorLayoutProps) => {
  const theme = useTheme();

  return (
    <Box width="100%" marginTop={theme.spacing(2)} paddingX={theme.spacing(1)}>
      <SectionHeader showDivider title={`${isUpdatePage ? 'Edit' : 'New'} Blueprint`}>
        <BlueprintActions />
      </SectionHeader>
      <Box marginTop={theme.spacing(3)} maxWidth={`${theme.breakpoints.values.md}px`}>
        <NameInput nameInputRef={nameInputRef} />
      </Box>
      <Box marginTop={theme.spacing(4)}>
        <SectionHeader showDivider title="Fields">
          <FieldsActions />
          <FieldBreadcrumbs />
        </SectionHeader>
        <Box marginTop={theme.spacing(3)}>{children}</Box>
      </Box>
    </Box>
  );
};

export default BlueprintEditorLayout;
