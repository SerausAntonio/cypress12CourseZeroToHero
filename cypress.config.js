const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '61ftzi',
   reporter: 'cypress-multi-reporters',
   reporterOptions:{
    configFile: 'reporter-config.json'
   },
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://www.automationteststore.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions:{
      configFile: 'reporter-config.json'
    },
    env: {
      login_url: 'https://www.webdriveruniversity.com/',
      products_url: '/products',
      
    },
  },
});
