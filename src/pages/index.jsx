/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';

import { decodeHexString } from '../lib/utils';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    this.setState({
      email: decodeHexString('73696d6f6e4073696d6f6e73696e636c6169722e636f6d'),
    });
  }

  render() {
    const { email } = this.state;

    return (
      <main className="container">
        <Head>
          <title>Simon Sinclair &mdash; Home</title>
          <meta name="description" content="Simon Sinclair is a Software Engineer from the United Kingdom." />
        </Head>
        <h1 className="greeting">Hello.</h1>
        <p className="introduction beta">
          I&apos;m Simon &mdash; a Software Engineer from the United Kingdom. I currently work for the
          {' '}
          <abbr title="British Broadcasting Corporation">BBC</abbr>
          {' '}
          in London.
        </p>

        { email && (
          <div className="section">
            <h2>Contact</h2>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}

        <div className="section">
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
    );
  }
}

export default Index;
