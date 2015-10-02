Package.describe({
  summary: "Reactive publish endpoints",
  version: '0.1.0',
  name: 'peerlibrary:reactive-publish',
  git: 'https://github.com/peerlibrary/meteor-reactive-publish.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  // Core dependencies.
  api.use([
    'coffeescript',
    'underscore',
    'mongo'
  ], 'server');

  // 3rd party dependencies.
  api.use([
    'peerlibrary:server-autorun@0.4.0',
    'peerlibrary:reactive-mongo@0.1.0'
  ], 'server');

  api.addFiles([
    'publish.js',
    'server.coffee'
  ], 'server');
});

Package.onTest(function (api) {
  // Core dependencies.
  api.use([
    'tinytest',
    'test-helpers',
    'coffeescript',
    'insecure',
    'random',
    'underscore',
    'reactive-var',
    'check'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:reactive-publish'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5',
    'peerlibrary:server-autorun@0.4.0',
    'peerlibrary:classy-test@0.2.18'
  ]);

  api.add_files([
    'tests.coffee'
  ]);
});
