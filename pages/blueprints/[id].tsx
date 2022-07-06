import React from 'react';
import { GetServerSideProps } from 'next';
import { getBlueprintById } from 'src/utils';
import Head from 'next/head';
import { NewBlueprint } from 'src/modules';

function BlueprintUpdatePage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Update Blueprint</title>
      </Head>
      <NewBlueprint />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = getBlueprintById({
  authRequired: true,
});

export default BlueprintUpdatePage;
