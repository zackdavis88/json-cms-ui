import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function HomePage() {
  return <div>Home Page</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default HomePage;
