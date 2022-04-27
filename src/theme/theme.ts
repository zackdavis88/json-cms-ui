import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import indigo from '@mui/material/colors/indigo';
import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import green from '@mui/material/colors/green';
import amber from '@mui/material/colors/amber';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: indigo['700'],
      main: indigo['800'],
      dark: indigo['900'],
    },
    secondary: {
      light: grey['300'],
      main: grey['400'],
      dark: grey['500'],
    },
    info: {
      light: lightBlue['700'],
      main: lightBlue['800'],
      dark: lightBlue['900'],
    },
    error: {
      light: red['700'],
      main: red['800'],
      dark: red['900'],
    },
    warning: {
      light: amber['700'],
      main: amber['800'],
      dark: amber['900'],
    },
    success: {
      light: green['700'],
      main: green['800'],
      dark: green['900'],
    },
    background: {
      default: grey['100'],
    },
  },
  mixins: {
    toolbar: {
      height: 64,
    },
  },
});

export default responsiveFontSizes(theme);
