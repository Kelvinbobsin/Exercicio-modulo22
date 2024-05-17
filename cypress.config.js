const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[name]-result",
      html: true
    }
  },


<<<<<<< HEAD
});
=======
});
>>>>>>> ecbaec2ee353cec6585104055efef396d914c550
