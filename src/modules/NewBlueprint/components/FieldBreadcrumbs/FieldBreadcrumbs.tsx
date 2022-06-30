import React from 'react';
import { useFieldBreadcrumbs } from 'src/modules/NewBlueprint/hooks';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BreadcrumbButton } from './components';

const FieldBreadcrumbs = () => {
  const theme = useTheme();
  const breadcrumbIds = useFieldBreadcrumbs();

  if (!breadcrumbIds.length) {
    return null;
  }

  return (
    <Box marginTop={theme.spacing(2)} display="flex" flexDirection="row" flexWrap="wrap">
      <BreadcrumbButton fieldId="root" />
      {breadcrumbIds.map((fieldId, index) => (
        <BreadcrumbButton
          key={fieldId}
          fieldId={fieldId}
          disabled={index === breadcrumbIds.length - 1}
        />
      ))}
    </Box>
  );
};

export default FieldBreadcrumbs;
