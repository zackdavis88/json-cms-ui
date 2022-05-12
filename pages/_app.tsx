import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from 'src/theme';
import { useStore } from 'src/hooks';
import { Navbar } from 'src/modules';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="xl" disableGutters>
          {/* TODO: Wrap <Component> within some sort of <Auth> component when authRequired is true */}
          {pageProps.authRequired ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
