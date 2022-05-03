import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function LayoutsPage() {
  return <div>Layouts Page</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default LayoutsPage;
