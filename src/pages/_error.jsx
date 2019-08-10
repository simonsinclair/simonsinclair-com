import Head from 'next/head';

const Error = () => (
  <main className="container">
    <Head>
      <title>Simon Sinclair &mdash; Oops</title>
      <meta name="description" content="The page you are looking for could not be found." />
    </Head>
    <h1>Oops</h1>
    <p>The page you are looking for could not be found.</p>
  </main>
);

export default Error;
