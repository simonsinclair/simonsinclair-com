import React from 'react';
import Page from '../components/Page';

const Error = () => (
  <Page title="Simon Sinclair &mdash; Not Found">
    <h1 className="logotype">404</h1>
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

export default Error;
