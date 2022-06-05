import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';
import { NavigationCards } from 'src/modules';

function HomePage() {
  return (
    <>
      <Head>JSON CMS - Home</Head>
      <NavigationCards />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default HomePage;
