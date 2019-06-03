import React from 'react';
import Link from 'next/link';

import Page from '../components/Page';

class Index extends React.Component {
  static hexToString(hex) {
    let string = '';
    for (let i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
  }

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello',
      email: null,
    };
  }

  componentDidMount() {
    let greeting = '';
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 15) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    this.setState({
      greeting,
      email: Index.hexToString('73696d6f6e4073696d6f6e73696e636c6169722e636f6d'),
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
