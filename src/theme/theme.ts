// TODO: This is all copy/pasted from another project. Make the theme fit.
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
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
      light: blue['700'],
      main: blue['800'],
      dark: blue['900'],
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
      default: '#fafafa',
    },
  },
});

export default theme;
