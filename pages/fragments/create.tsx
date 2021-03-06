import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';

function FragmentCreatePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Create Fragment</title>
      </Head>
      <div>Fragment Create Page</div>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default FragmentCreatePage;
