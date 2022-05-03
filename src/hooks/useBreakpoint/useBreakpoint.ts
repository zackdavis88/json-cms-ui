/**
 * Be careful using this hook. IT IS FOR MATERIAL-UI ONLY. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

function useBreakpoint() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  const value = keys.reduce((output, key) => {
    const matches = useMediaQuery(theme.breakpoints.up(key));
    return !output && matches ? key : output;
  }, null);

  return {
    breakpoint: value || 'xs',
    isXSmallBreakpoint: value === 'xs',
    isSmallBreakpoint: value === 'sm',
    isMediumBreakpoint: value === 'md',
    isLargeBreakpoint: value === 'lg',
    isXLargeBreakPoint: value === 'xl',
  };
}

export default useBreakpoint;
