/* eslint-env jest */

import { render } from '@testing-library/react';

import Error from '../_error';

// To do: learn to mock out nested components properly.
jest.mock('../../components/Page', () => 'Page');

describe('<Error />', () => {
  it('Should match Snapshot', () => {
    // asFragment - Returns a DocumentFragment of your rendered component.
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });
});
