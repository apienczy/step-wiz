Package.describe({
  name: 'apienczy:step-wiz',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor step wizard',
  // URL to the Git repository containing the source code for this package.
  git: 'https://apienczy@github.com/apienczy/step-wiz.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');
  api.use('ecmascript');
  api.mainModule('step-wiz.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('apienczy:step-wiz');
  api.mainModule('step-wiz-tests.js');
});
