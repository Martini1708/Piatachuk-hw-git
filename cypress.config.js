const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1280,
    viewportHeight: 720,
    e2e: {
      baseUrl: "https://juice-shop-sanitarskyi.herokuapp.com/#/",
     
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
