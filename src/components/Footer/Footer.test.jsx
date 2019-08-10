import { render } from '@testing-library/react';

import Footer from './Footer';

jest.spyOn(Date.prototype, 'getFullYear')
  .mockImplementation(() => '1988');

describe('<Footer /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('renders the given copyright year', () => {
    const { queryByText } = render(<Footer />);
    expect(queryByText(/1988/i)).not.toBeNull();
  });
});
