const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: 'jptmpi',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./cypress/allure-results",
      });
    },
    testIsolation: false,
    experimentalRunAllSpecs: true,
    viewportHeight: 1400,
    viewportWidth: 1600,
    video: true,
    videoCompression: false,
    defaultCommandTimeout: 30000
  },
});