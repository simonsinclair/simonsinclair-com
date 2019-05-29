import React from 'react';
import Layout from '../components/Layout';

const Error = () => (
  <Layout title="Simon Sinclair &mdash; Not Found">
    <h1 className="logotype">404</h1>
    <style jsx>
      {`
        .logotype {}
      `}
    </style>
  </Layout>
);

export default Error;
