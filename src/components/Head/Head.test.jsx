import { render } from '@testing-library/react';

import Head from './Head';

describe('<Head /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Head><title>Dummy Title</title></Head>);
    expect(container).toMatchSnapshot();
  });
});
