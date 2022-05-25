import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ActionsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  width: '100%',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    flexWrap: 'wrap',
  },
  '& > button:nth-of-type(odd)': {
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginRight: '0px',
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
  '& > button:nth-of-type(even)': {
    marginLeft: theme.spacing(0.5),
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      marginLeft: '0px',
      width: '100%',
    },
  },
}));

export default ActionsContainer;
