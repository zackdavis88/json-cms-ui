import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';

function ComponentCreatePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Create Component</title>
      </Head>
      <div>Component Create Page</div>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default ComponentCreatePage;
