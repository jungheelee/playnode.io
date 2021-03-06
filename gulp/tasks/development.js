var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var runSequence     = require('run-sequence');
var config          = require('../config');

module.exports = gulp.task(config.development.taskname, [config.clean.taskname], function (cb) {
  cb = cb || function() {};

  runSequence(
    config.copyIndex.taskname,
    config.vendor.js.taskname,
    config.vendor.css.taskname,
    config.images.taskname,
    config.scripts.taskname,
    config.styles.taskname,
    config.download.taskname,
    config.copyfiles.taskname,
    config.copy2012.taskname,
    config.copy2015.taskname,
    config.copy2016.taskname,
    config.copy2017.taskname,
    config.watch.taskname
    , cb
  );
});
