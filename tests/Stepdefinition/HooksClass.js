const { Before, After,Status } = require("@cucumber/cucumber");
const utils = require("../Utility/BaseClass");

//Normal Hooks
Before(async function () {
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
});

After(async function (Scenario) {
  // await this.page.screenshot({path:`tests/ScreenShots/image.png`,fullPage:true})
  //await this.page.screenshot({path:`tests/ScreenShots/${Date.now()}image.png`,fullPage:true})

  // //Take Screenshots all Passed and Failed Scenarios
  // const ScenarioName = Scenario.pickle.name
  //   .trim()
  //   .replace(/[^a-zA-Z0-9]/g, "_");
  // const filePath = `tests/ScreenShots/${ScenarioName}.png`;

  // const screenshot=await this.page.screenshot({ path: filePath, fullPage: true });
  //  await this.attach(screenshot,'image/png')
  // await this.browser.close();

  if (Scenario.result.status == Status.FAILED) {
    //Take Screenshots all Failed Scenarios only
    const ScenarioName = Scenario.pickle.name
      .trim()
      .replace(/[^a-zA-Z0-9]/g, "_");
    const filePath = `tests/ScreenShots/${ScenarioName}.png`;

    const screenshot = await this.page.screenshot({
      path: filePath,
      fullPage: true,
    });
    await this.attach(screenshot, "image/png");
  }
  await this.browser.close();
});

// Before(async function () {
//   console.log("-----Before Scenario---------1")
// });

// After(async function () {
//    console.log("-----After Scenario---------1")
// });

// Before(async function () {
//   console.log("-----Before Scenario---------2")
// });

// After(async function () {
//    console.log("-----After Scenario---------2")
// });

//Ordered Hooks
// Before({order:1},async function () {
//   console.log("-----Before Scenario---------1")
// });

// After({order:1},async function () {
//    console.log("-----After Scenario---------1")
// });

// Before({order:2},async function () {
//   console.log("-----Before Scenario---------2")
// });

// After({order:2},async function () {
//    console.log("-----After Scenario---------2")
// });

//Tagged Hooks
// Before({tags:"@smoke"},async function () {
//   console.log("-----Before Scenario---------1")
// });

// After({tags:"@smoke"},async function () {
//    console.log("-----After Scenario---------1")
// });

// Before({tags:"@retest"},async function () {
//   console.log("-----Before Scenario---------2")
// });

// After({tags:"@retest"},async function () {
//    console.log("-----After Scenario---------2")
// });

//Ordered and Tagged Hooks
// Before({tags:"@smoke",order:1},async function () {
//   console.log("-----Before Scenario---------1")
// });

// After({tags:"@smoke",order:1},async function () {
//    console.log("-----After Scenario---------1")
// });

// Before({order:2},async function () {
//   console.log("-----Before Scenario---------2")
// });

// After({order:2},async function () {
//    console.log("-----After Scenario---------2")
// });
