import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const NavigationDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.common.white,
  margin: theme.spacing(2),
}));

export default NavigationDivider;
