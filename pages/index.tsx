import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import { Box, Container, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LoginForm, SignUpForm } from 'src/modules';
import Head from 'next/head';

function Index() {
  const theme = useTheme();
  const [showSignUpForm, setShowSignUpForm] = React.useState<boolean>(false);
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
          <Box display="block" position="relative" width="100%">
            <Slide direction="right" in={!showSignUpForm} appear={false} unmountOnExit>
              <Box position="absolute" top="0" left="0">
                <LoginForm onSignUpClick={() => setShowSignUpForm(true)} />
              </Box>
            </Slide>
            <Slide direction="right" in={showSignUpForm} unmountOnExit>
              <Box position="absolute" top="0" left="0">
                <SignUpForm onBackClick={() => setShowSignUpForm(false)} />
              </Box>
            </Slide>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getAuthToken();

export default Index;
