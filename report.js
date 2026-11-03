const reporter=require("cucumber-html-reporter")

const options={
      theme:'bootstrap',
      jsonFile:'reports/cucumberJsonReport.json',
      output:'reports/customReport.html',
      reportSuiteAsScenarios:true,
      launchReport:true,
      metadata:{
        "EnvironMent":"QA",
        "Tester":"Ramesh",
        "platForm":"Windows 11",
        "Browser":"Chromium",
        "Executed":"Local"
      }
}


reporter.generate(options);