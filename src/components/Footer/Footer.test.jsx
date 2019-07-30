import { render } from '@testing-library/react';

import Footer from './Footer';

describe('<Footer /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Footer date={new Date(88, 0, 15)} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the given copyright year', () => {
    const { queryByText } = render(<Footer date={new Date(88, 0, 15)} />);
    expect(queryByText(/1988/i)).not.toBeNull();
  });
});
