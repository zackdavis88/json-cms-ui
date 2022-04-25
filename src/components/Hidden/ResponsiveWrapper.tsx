import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { HiddenProps } from './Hidden';

export const ResponsiveWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hiddenOn' && prop !== 'display',
})<HiddenProps>(({ theme, hiddenOn, display }) => {
  const styles = {
    display,
  };

  switch (hiddenOn) {
    case 'lgDown':
      return {
        ...styles,
        [theme.breakpoints.down(theme.breakpoints.values.lg)]: { display: 'none' },
      };
    case 'mdDown':
      return {
        ...styles,
        [theme.breakpoints.down(theme.breakpoints.values.md)]: { display: 'none' },
      };
    case 'smDown':
      return {
        ...styles,
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: { display: 'none' },
      };
    case 'lgUp':
      return {
        ...styles,
        [theme.breakpoints.up(theme.breakpoints.values.lg)]: { display: 'none' },
      };
    case 'mdUp':
      return {
        ...styles,
        [theme.breakpoints.up(theme.breakpoints.values.md)]: { display: 'none' },
      };
    case 'smUp':
      return {
        ...styles,
        [theme.breakpoints.up(theme.breakpoints.values.sm)]: { display: 'none' },
      };
    default:
      return {
        ...styles,
      };
  }
});
