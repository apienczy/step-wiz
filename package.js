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
  api.use('check');
  api.use('tracker');

  // Client
  api.use([
    'livedata', 
    'underscore', 
    'deps', 
    'templating', 
    'ui', 
    'blaze', 
    'ejson', 
    'reactive-dict', 
    'twbs:bootstrap@3.3.6',
    'jquery']
  );

  // For validation purposes
  api.use([
    'aldeed:simple-schema@1.3.3',
    'mdg:validation-error@0.1.0',
  ]);

  api.mainModule('step-wiz.js');

  // Exports
  api.export([
    'swWizard',
    'swStep']);

  // Core functionality components
  api.addFiles([
    'imports/client/modules/step/step.js',
    'imports/client/modules/step/step.html',
    'imports/client/modules/wizard/_swWizard.js',
    'imports/client/modules/wizard/swWizard.js',
    'imports/client/modules/wizard/swWizard.html']);

  // External plugins
  api.addFiles ([
    'imports/client/plugins/steps/jquery.steps.css',
    'imports/client/plugins/steps/jquery.steps.min.js']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('apienczy:step-wiz');
  api.mainModule('step-wiz-tests.js');
});
