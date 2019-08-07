import React from 'react';
import Page from '../components/Page/Page';

const Error = () => (
  <Page title="Simon Sinclair &mdash; Oops" description="The page you requested could not be found.">
    <main className="container">
      <h1>Oops</h1>
      <p>Sorry, that page cannot be found.</p>
    </main>
  </Page>
);

export default Error;
