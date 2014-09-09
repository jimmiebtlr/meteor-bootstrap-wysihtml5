Package.describe({
  summary: "Port of Bootstrap-wysihtml5 to Meteor.",
  version: "0.3.2",
  git:"https://github.com/jimmiebtlr/meteor-bootstrap-wysihtml5.git"
});

Package.on_use(function (api) {
    api.use(['jquery@1.0.0'], 'client');
    api.add_files([
        'lib/bootstrap-wysihtml5.js',
        'lib/bootstrap-wysihtml5.css',
        'lib/wysiwyg-color.css'
    ], 'client');
});
