module.exports = {
  default: {
    paths: [
      "features/**/*.feature"
    ],
    require: [
      "features/stepDefinitions/**/*.ts",
      "hooks/**/*.ts",
      "support/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      'allure-cucumberjs/reporter'
    ]
  }
};