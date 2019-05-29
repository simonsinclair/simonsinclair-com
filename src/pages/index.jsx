import Page from '../components/Page';

const Index = () => (
  <Page
    title="Simon Sinclair &mdash; Home"
    description="Simon Sinclair is a multidisciplinary UX Designer living in London, UK."
  >
    <h2 className="greeting">Hello.</h2>
    <p className="introduction">I&apos;m Simon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <style jsx>
      {`
        .greeting {}
        .introduction {}
      `}
    </style>
  </Page>
);

export default Index;
