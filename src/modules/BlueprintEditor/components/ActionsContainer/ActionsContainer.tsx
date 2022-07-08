import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(1),
  'button:nth-of-type(1)': {
    marginRight: theme.spacing(1),
  },
  'button:nth-of-type(2)': {
    marginRight: theme.spacing(1),
  },
}));

export default ActionsContainer;
