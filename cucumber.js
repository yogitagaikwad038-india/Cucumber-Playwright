module.exports = {
  default: {
    paths: [
      "features/**/*.feature"
    ],
    require: [
      "features/stepDefinitions/**/*.ts",
      "hooks/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: ["progress"]
  }
};