import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function Index() {
  return <div>Hello, World!</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default Index;
