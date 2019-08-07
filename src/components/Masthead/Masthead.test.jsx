import { render } from '@testing-library/react';

import Masthead from './Masthead';

describe('<Masthead /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Masthead />);
    expect(container).toMatchSnapshot();
  });
});
