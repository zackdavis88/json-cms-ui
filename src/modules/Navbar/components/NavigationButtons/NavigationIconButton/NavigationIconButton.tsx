import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginRight: theme.spacing(1),
}));

export default StyledIconButton;
