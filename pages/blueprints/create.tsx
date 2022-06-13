import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Head from 'next/head';
import { NewBlueprint } from 'src/modules';

function BlueprintCreatePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Create Blueprint</title>
      </Head>
      <NewBlueprint />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintCreatePage;
