/* eslint-disable max-len */
import React from 'react';

import { hexToString, getGreetingFromDate } from '../lib/utils';
import Page from '../components/Page';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello',
      email: null,
    };
  }

  componentDidMount() {
    this.setState({
      greeting: getGreetingFromDate(new Date()),
      email: hexToString('73696d6f6e4073696d6f6e73696e636c6169722e636f6d'),
    });
  }

  render() {
    const { email, greeting } = this.state;

    return (
      <Page
        title="Simon Sinclair &mdash; Home"
        description="Simon Sinclair is a Software Engineer from the United Kingdom."
      >
        <main className="container">
          <h1 className="greeting">
            {greeting}
            .
          </h1>
          <p className="introduction">
            I&apos;m Simon &mdash; a Software Engineer from the United Kingdom. I currently work for the
            {' '}
            <abbr title="British Broadcasting Corporation">BBC</abbr>
            {' '}
            in London.
          </p>

          { email && (
            <div>
              <h2>Contact</h2>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}

          <div>
            <h2 className="elsewhere">Elsewhere</h2>
            <ul className="nav-list nav-list--inline">
              <li>
                <a href="https://github.com/simonsinclair">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/thatsbyme/">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/simon.sinclair/">Instagram</a>
              </li>
            </ul>
          </div>
        </main>

        <style jsx>
          {`
            .greeting {}
            .introduction {}
          `}
        </style>
      </Page>
    );
  }
}

export default Index;
