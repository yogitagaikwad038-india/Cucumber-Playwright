const report =
require(
'multiple-cucumber-html-reporter'
);

report.generate({

    jsonDir:'reports',

    reportPath:'reports/html',

    displayDuration:
    true,

    pageTitle:
    'Playwright Cucumber Report',

    reportName:
    'Automation Execution Report',



    metadata: {

    browser: {
    name:
    'chrome',
    version:
    'latest'
    },

    device:
    'Local',

    platform: {
    name:
    'windows',
    version:
    '11'
    }

    }

});