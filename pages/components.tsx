import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function ComponentsPage() {
  return <div>Components Page</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default ComponentsPage;
