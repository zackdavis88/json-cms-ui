import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: theme.mixins.toolbar.height,
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
