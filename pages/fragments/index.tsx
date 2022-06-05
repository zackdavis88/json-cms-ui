import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Link from 'next/link';
import Head from 'next/head';

function FragmentsPage() {
  return (
    <>
      <Head>
        <title>JSON CMS - Fragments</title>
      </Head>
      <div>Fragments Page</div>
      <Link href="/fragments/create">
        <a>Create</a>
      </Link>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default FragmentsPage;
