import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';
import Link from 'next/link';

function BlueprintsPage() {
  return (
    <>
      <div>Blueprints Page</div>
      <Link href="/blueprints/create">
        <a>Create</a>
      </Link>
    </>
  );
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintsPage;
