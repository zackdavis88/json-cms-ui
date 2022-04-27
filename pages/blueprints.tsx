import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function BlueprintsPage() {
  return <div>Blueprints Page</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default BlueprintsPage;
