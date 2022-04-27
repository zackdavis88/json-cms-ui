import React from 'react';
import { GetServerSideProps } from 'next';
import { getAuthToken } from 'src/utils';

function FragmentsPage() {
  return <div>Fragments Page</div>;
}

export const getServerSideProps: GetServerSideProps = getAuthToken;

export default FragmentsPage;
