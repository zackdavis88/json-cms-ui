import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LoginForm } from 'src/modules';
import Head from 'next/head';

function Index() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        paddingTop={theme.spacing(4)}
      >
        <Container maxWidth="sm">
          <LoginForm />
        </Container>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getAuthToken();

export default Index;
