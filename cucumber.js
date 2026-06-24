module.exports = {
default: {
require: [
'features/stepDefinitions/*.ts',
'hooks/*.ts'
],

requireModule: [
'ts-node/register'
],



format: [
'progress',
'json:reports/cucumber-report.json'
],

//parallel: 3
}
};