import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function BlueprintsPage() {
  return <div>Blueprints Page</div>;
}

// TODO: this SSR method is a placeholder. It will be replaced once this page starts development.
export const getServerSideProps: GetServerSideProps = getAuthToken({
  authRequired: true,
});

export default BlueprintsPage;
