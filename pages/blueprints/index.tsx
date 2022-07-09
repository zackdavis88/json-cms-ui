import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';
import { BlueprintList } from 'src/modules';

function BlueprintsPage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Blueprints</title>
      </Head>
      <BlueprintList />
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintsPage;
