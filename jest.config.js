module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],

  testPathIgnorePatterns: [
    '<rootDir>/.firebase/',
    '<rootDir>/build/',
    '<rootDir>/bundles/',

    // We require node_modules in test
    // for things like 'normalize.css'.
    // '<rootDir>/node_modules/',
  ],

  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
