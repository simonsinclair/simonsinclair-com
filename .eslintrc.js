module.exports = {
  parser: "babel-eslint",
  extends: 'airbnb',
  rules: {
    // In a Next JS project, React
    // doesn't have to be in-scope.
    "react/react-in-jsx-scope": 0,

    // Next JS's <Link /> component
    // requires an <a /> as its child.
    "jsx-a11y/anchor-is-valid": 0,
  },
};
