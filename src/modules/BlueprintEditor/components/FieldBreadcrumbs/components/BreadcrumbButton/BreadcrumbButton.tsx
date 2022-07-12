import React from 'react';
import { useDispatchUpdateBlueprintFieldView } from 'src/hooks';
import { Box, Button, Divider } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { useBreadcrumbData } from 'src/modules/BlueprintEditor/hooks';

interface BreadcrumbButtonProps {
  fieldId: string;
  disabled?: boolean;
}

const BreadcrumbButton = ({ fieldId, disabled = false }: BreadcrumbButtonProps) => {
  const theme = useTheme();
  const { name, hasError } = useBreadcrumbData(fieldId);
  const updateBlueprintFieldView = useDispatchUpdateBlueprintFieldView();

  return (
    <Box display="flex">
      <StyledButton
        variant="text"
        size="small"
        onClick={() => updateBlueprintFieldView(fieldId)}
        disabled={disabled}
        disableTouchRipple
        className={hasError ? 'hasError' : undefined}
      >
        <span>{name}</span>
      </StyledButton>
      <Box marginX={theme.spacing(1)}>
        <Divider orientation="vertical" />
      </Box>
    </Box>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&.hasError': {
    color: theme.palette.error.main,
  },
  textTransform: 'none',
  '&:disabled': {
    color: theme.palette.common.black,
  },
  '& > span': {
    maxWidth: '300px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

export default BreadcrumbButton;
