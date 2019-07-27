import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Footer date={new Date(88, 0, 15)} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct copyright notice', () => {
    const { getByText } = render(<Footer date={new Date(88, 0, 15)} />);
    expect(getByText('© 1988 Simon Sinclair.')).not.toBeNull();
  });
});
