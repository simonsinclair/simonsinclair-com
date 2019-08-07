import { render } from '@testing-library/react';

import NavBar from './NavBar';

describe('<NavBar /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
