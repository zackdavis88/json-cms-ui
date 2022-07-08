import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFieldsMessageError } from 'src/modules/BlueprintEditor/hooks';

const FieldsMessage = () => {
  const theme = useTheme();
  const fieldsErrorMessage = useFieldsMessageError();

  return (
    <Box
      width="100"
      bgcolor={fieldsErrorMessage ? theme.palette.error.main : theme.palette.info.main}
      color={theme.palette.common.white}
      padding={theme.spacing(2)}
      borderRadius={theme.radii(1)}
    >
      <Typography variant="body1">
        {fieldsErrorMessage
          ? fieldsErrorMessage
          : 'There are no fields at this level of the Blueprint.'}
      </Typography>
    </Box>
  );
};

export default FieldsMessage;
