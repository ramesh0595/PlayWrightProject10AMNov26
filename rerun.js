module.exports = {
  default: {
    
    require: ["tests/Stepdefinition/*.js"],
    format: [
      "progress",
      "json:reports/cucumberJsonReport.json",
      "html:reports/cucumberHTMLReport.html",
      "junit:reports/cucumberJunitReport.xml",
      "allure-cucumberjs/reporter",
    ],
    formatOptions: {
      resultsDir: "allure-results",
    },
    dryRun: false,
    tags: "@E2E",
  },
};
