/* eslint-env jest */

import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer /> is a component that', () => {
  it('renders the correct copyright notice year', () => {
    const { getByText } = render(<Footer date={new Date(88, 0, 15)} />);

    // getByText - Get any element by its text content.
    expect(getByText('© 1988 Simon Sinclair.')).not.toBeNull();
  });

  it('matches its snapshot', () => {
    // asFragment - Returns a DocumentFragment of your rendered component.
    const { asFragment } = render(<Footer date={new Date(88, 0, 15)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
