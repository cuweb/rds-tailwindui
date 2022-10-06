import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  screenshotOnRunFailure: false,

  env: {
    baseUrl: 'http://localhost:6006',
  },

  e2e: {
    baseUrl: 'http://localhost:6006',
    specPattern: 'src/**/*cy.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
