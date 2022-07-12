import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from 'src/theme';
import { useStore } from 'src/hooks';
import { Navbar, Notification, AuthenticationController } from 'src/modules';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box width="100%" position="relative">
          <Container maxWidth="xl" disableGutters>
            <Notification />
            {pageProps.authRequired ? (
              <AuthenticationController>
                <Component {...pageProps} />
              </AuthenticationController>
            ) : (
              <Component {...pageProps} />
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
