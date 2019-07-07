import React from 'react';
import Link from 'next/link';

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
        description="Simon Sinclair is a Front-end Developer living in London, UK."
      >
        <main className="container">
          <h1 className="greeting">
            {greeting}
            .
          </h1>
          <p className="introduction">I&apos;m Simon &mdash; a Front&ndash;end Developer working for the BBC in London, UK.</p>

          { email && (
            <div>
              <h2>Contact</h2>
              <Link href={`mailto:${email}`}><a>{email}</a></Link>
            </div>
          )}

          <div>
            <h2 className="elsewhere">Elsewhere</h2>
            <ul className="nav-list nav-list--inline">
              <li>
                <Link href="https://github.com/simonsinclair"><a>GitHub</a></Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/thatsbyme/"><a>LinkedIn</a></Link>
              </li>
              <li>
                and
                {' '}
                <Link href="https://www.instagram.com/simon.sinclair/"><a>Instagram</a></Link>
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
