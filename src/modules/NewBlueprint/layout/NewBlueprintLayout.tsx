import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SectionHeader } from 'src/components';
import { NewBlueprintActions, FieldsActions } from 'src/modules/NewBlueprint/components';

interface NewBlueprintLayoutProps {
  children: React.ReactNode;
  nameInputRef: React.MutableRefObject<HTMLInputElement | undefined>;
  onAddFieldClick: (isRoot: boolean) => void;
  isRoot: boolean;
}

const NewBlueprintLayout = ({
  children,
  nameInputRef,
  onAddFieldClick,
  isRoot,
}: NewBlueprintLayoutProps) => {
  const theme = useTheme();

  return (
    <Box width="100%" marginTop={theme.spacing(2)} paddingX={theme.spacing(1)}>
      <SectionHeader showDivider title="New Blueprint">
        <NewBlueprintActions />
      </SectionHeader>
      <Box marginTop={theme.spacing(3)} maxWidth={`${theme.breakpoints.values.md}px`}>
        <TextField
          id="blueprint-name"
          label="Blueprint Name"
          variant="filled"
          type="text"
          fullWidth
          required
          inputProps={{ maxLength: 100 }}
          inputRef={nameInputRef}
        />
      </Box>
      <Box marginTop={theme.spacing(4)}>
        <SectionHeader showDivider title="Fields">
          <FieldsActions onAddFieldClick={onAddFieldClick} isRoot={isRoot} />
        </SectionHeader>
        <Box marginTop={theme.spacing(3)}>{children}</Box>
      </Box>
    </Box>
  );
};

export default NewBlueprintLayout;
