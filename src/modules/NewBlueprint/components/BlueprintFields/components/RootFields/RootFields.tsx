import React from 'react';
import { useBlueprintRootFields } from 'src/hooks';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BlueprintFieldAccordion } from 'src/modules/NewBlueprint/components/BlueprintFields/components';

const RootFields = () => {
  const rootFields = useBlueprintRootFields();
  const theme = useTheme();
  return (
    <>
      {rootFields.map((fieldId) => {
        return (
          <Box
            key={fieldId}
            marginBottom={theme.spacing(2)}
            maxWidth={`${theme.breakpoints.values.md}px`}
          >
            <BlueprintFieldAccordion fieldId={fieldId} />
          </Box>
        );
      })}
    </>
  );
};

export default RootFields;
