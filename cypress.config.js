const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '61ftzi',
  
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://www.automationteststore.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    env: {
      login_url: 'https://www.webdriveruniversity.com/',
      products_url: '/products',
      
    },
  },
});
