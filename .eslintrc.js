module.exports = {
  parser: "babel-eslint",
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // In a Next JS project, React
    // doesn't have to be in-scope.
    "react/react-in-jsx-scope": 0,

    // Next JS's <Link /> component
    // requires an <a /> as its child.
    "jsx-a11y/anchor-is-valid": 0,

    "no-console": 0,
  },
};
