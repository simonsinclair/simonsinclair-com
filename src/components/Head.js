import NextHead from 'next/head';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    { props.children }
  </NextHead>
);

export default Head;
