import Page from '../components/Page';

const Index = () => (
  <Page
    title="Simon Sinclair &mdash; Home"
    description="Simon Sinclair is a multidisciplinary UX Designer living in London, UK."
  >
    <h1 className="logotype">Simon Sinclair</h1>
    <style jsx>
      {`
        .logotype {
          margin-top: 0;
          margin-bottom: 0;
          padding-right: 16px;
          padding-left: 16px;
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          text-align: center;
          transform: translateY(-50%);
        }
      `}
    </style>
  </Page>
);

export default Index;
