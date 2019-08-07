import { render } from '@testing-library/react';

import Page from './Page';

describe('<Page /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(
      <Page title="Dummy Title" description="This is a dummy description.">
        <h1>Hello, World.</h1>
      </Page>
    );
    expect(container).toMatchSnapshot();
  });
});
