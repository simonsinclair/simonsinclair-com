module.exports = {
  verbose: true,

  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    'jest-styled-components',
  ],

  testPathIgnorePatterns: [
    '<rootDir>/.firebase/',
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
  ],
};
