const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false ,
    setupNodeEvents(on, config) {
      
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/qauto2',
    overwrite: false,
    html: true,
    json: true
  },
  env: {
    userEmail: 'user_bugs@example.com', 
    userPassword: 'welcome2qauto'
  }
});
