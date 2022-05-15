import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from 'src/theme';
import { useStore } from 'src/hooks';
import { Navbar, Notification } from 'src/modules';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box width="100vw" position="relative">
          <Container maxWidth="xl" disableGutters>
            <Notification />
            {/* TODO: Wrap <Component> within some sort of <Auth> component when authRequired is true */}
            {pageProps.authRequired ? (
              <Component {...pageProps} />
            ) : (
              <Component {...pageProps} />
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
