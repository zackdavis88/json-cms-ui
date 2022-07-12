import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';
import { NavigationCards } from 'src/modules';

function HomePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Home</title>
      </Head>
      <NavigationCards />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default HomePage;
