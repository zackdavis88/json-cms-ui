import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { HiddenOption, HiddenProps } from 'src/components/Hidden/Hidden';

export default styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hiddenOn' && prop !== 'display',
})<HiddenProps>(({ theme, hiddenOn, display }) => {
  let hiddenOnArray: HiddenOption[];
  if (!Array.isArray(hiddenOn)) {
    hiddenOnArray = [hiddenOn];
  } else {
    hiddenOnArray = hiddenOn;
  }

  return hiddenOnArray.reduce(
    (prev, hiddenOption) => {
      switch (hiddenOption) {
        case 'lgDown':
          return {
            ...prev,
            [theme.breakpoints.down(theme.breakpoints.values.lg)]: { display: 'none' },
          };
        case 'mdDown':
          return {
            ...prev,
            [theme.breakpoints.down(theme.breakpoints.values.md)]: { display: 'none' },
          };
        case 'smDown':
          return {
            ...prev,
            [theme.breakpoints.down(theme.breakpoints.values.sm)]: { display: 'none' },
          };
        case 'lgUp':
          return {
            ...prev,
            [theme.breakpoints.up(theme.breakpoints.values.lg)]: { display: 'none' },
          };
        case 'mdUp':
          return {
            ...prev,
            [theme.breakpoints.up(theme.breakpoints.values.md)]: { display: 'none' },
          };
        case 'smUp':
          return {
            ...prev,
            [theme.breakpoints.up(theme.breakpoints.values.sm)]: { display: 'none' },
          };
        default:
          return { ...prev };
      }
    },
    { display },
  );
});
