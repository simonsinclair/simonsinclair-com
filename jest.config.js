module.exports = {
  verbose: true,

  setupFilesAfterEnv: [
    // Ensure 'cleanup' is called after each test.
    // https://testing-library.com/docs/react-testing-library/api#cleanup
    '@testing-library/react/cleanup-after-each',
    'jest-styled-components',
  ],

  testPathIgnorePatterns: [
    '<rootDir>/.firebase/',
    '<rootDir>/build/',
    '<rootDir>/bundles/',

    // We require node_modules in test
    // for things like 'normalize.css'.
    // '<rootDir>/node_modules/',
  ],
};
