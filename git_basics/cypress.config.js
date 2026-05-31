const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    specPattern: 'homework/*.js',

 
    supportFile: 'commands.js', 
    setupNodeEvents(on, config) {
      
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
  },
});

