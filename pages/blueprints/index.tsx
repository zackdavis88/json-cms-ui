import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Link from 'next/link';
import Head from 'next/head';

function BlueprintsPage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Blueprints</title>
      </Head>
      <div>Blueprints Page</div>
      <div>
        <Link href="/blueprints/create">
          <a>Create</a>
        </Link>
      </div>
      <div>
        <Link href="/blueprints/62c4cb1e922b758de30b6361">
          <a>Existing Blueprint</a>
        </Link>
      </div>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintsPage;
