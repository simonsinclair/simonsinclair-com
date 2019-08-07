import { render } from '@testing-library/react';

import Masthead from './Masthead';

jest.mock('next/router', () => ({
  withRouter: (component) => {
    // eslint-disable-next-line no-param-reassign
    component.defaultProps = {
      ...component.defaultProps,
      router: {
        route: '/mock-route',
      },
    };
    return component;
  },
}));

describe('<Masthead /> is a component that', () => {
  it('renders and matches its snapshot', () => {
    const { container } = render(<Masthead />);
    expect(container).toMatchSnapshot();
  });
});
