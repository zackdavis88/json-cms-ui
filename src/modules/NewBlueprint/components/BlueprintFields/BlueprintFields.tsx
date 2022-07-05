import React from 'react';
import { useBlueprintFieldViewFields } from 'src/hooks';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BlueprintFieldAccordion, FieldsMessage } from './components';

const BlueprintFields = () => {
  const fields = useBlueprintFieldViewFields();
  const theme = useTheme();
  return (
    <Box>
      {fields.length ? (
        fields.map((fieldId) => {
          return (
            <Box
              key={fieldId}
              marginBottom={theme.spacing(2)}
              maxWidth={`${theme.breakpoints.values.md}px`}
            >
              <BlueprintFieldAccordion fieldId={fieldId} />
            </Box>
          );
        })
      ) : (
        <FieldsMessage />
      )}
    </Box>
  );
};

export default BlueprintFields;
