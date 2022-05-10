import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexWrap: 'nowrap',
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    flexWrap: 'wrap',
  },
  '& > button:nth-of-type(odd)': {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginRight: '0px',
      marginBottom: theme.spacing(1),
    },
  },
  '& > button:nth-of-type(even)': {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginLeft: '0px',
    },
  },
}));

export default ActionsContainer;
