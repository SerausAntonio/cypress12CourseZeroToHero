const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      login_url: '/login',
      products_url: '/products',
    },
  },
});
