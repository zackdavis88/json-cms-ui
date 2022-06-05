import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';

function BlueprintCreatePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Create Blueprint</title>
      </Head>
      <div>Blueprint Create Page</div>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintCreatePage;
