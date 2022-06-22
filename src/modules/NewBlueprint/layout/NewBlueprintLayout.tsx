import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SectionHeader } from 'src/components';
import {
  NewBlueprintActions,
  FieldsActions,
  NameInput,
} from 'src/modules/NewBlueprint/components';

interface NewBlueprintLayoutProps {
  children: React.ReactNode;
  nameInputRef: React.MutableRefObject<HTMLInputElement | undefined>;
}

const NewBlueprintLayout = ({ children, nameInputRef }: NewBlueprintLayoutProps) => {
  const theme = useTheme();

  return (
    <Box width="100%" marginTop={theme.spacing(2)} paddingX={theme.spacing(1)}>
      <SectionHeader showDivider title="New Blueprint">
        <NewBlueprintActions />
      </SectionHeader>
      <Box marginTop={theme.spacing(3)} maxWidth={`${theme.breakpoints.values.md}px`}>
        <NameInput nameInputRef={nameInputRef} />
      </Box>
      <Box marginTop={theme.spacing(4)}>
        <SectionHeader showDivider title="Fields">
          <FieldsActions />
        </SectionHeader>
        <Box marginTop={theme.spacing(3)}>{children}</Box>
      </Box>
    </Box>
  );
};

export default NewBlueprintLayout;
