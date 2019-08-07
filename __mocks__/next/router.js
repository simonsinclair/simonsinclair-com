module.exports = {
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
};
