Package.describe({
  name: 'keyvan:asset-readable-stream',
  version: '0.0.1',
  summary: 'Load a Meteor Asset as a readable stream',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/keyvanfatehi/meteor-asset-readablestream',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'buffer-stream-reader': '0.1.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('asset-readable-stream.js', 'server');
  api.export('AssetReadableStream', 'server');
});
