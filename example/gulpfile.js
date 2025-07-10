'use strict';
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-dart-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
let pipeline = require('readable-stream').pipeline;

// Configurable params.
const settings = {
  // Where source files are located.
  sassSrcFiles: ['src/sass/**/*.scss'],
  jsSrcDirs: ['src/js/**/*.js'],
  fontsSrcFiles: ['src/fonts/**/*'],
  imagesSrcFiles: ['src/images/**/*'],

  // Where each asset files will be stored.
  globalDestFiles: 'dist',
  sassDestFiles: 'dist/css',
  jsDestFiles: 'dist/js',
  fontsDestFiles: 'dist/fonts',
  imagesDestFiles: 'dist/images'
};

/**
 * Clean dist folder.
 */
const cleanTask = () => {
  return del(settings.globalDestFiles);
};

/**
 * Compiles js files.
 */
const jsTask = () => {
  return pipeline(
    gulp.src(settings.jsSrcDirs),
    terser(),
    gulp.dest(settings.jsDestFiles)
  );
};

/**
 * Copy fonts files.
 */
const fontsTask = () => {
  return gulp.src(settings.fontsSrcFiles)
    .pipe(gulp.dest(settings.fontsDestFiles));
};

/**
 * Copy images files.
 */
const imagesTask = () => {
  return gulp.src(settings.imagesSrcFiles)
    .pipe(gulp.dest(settings.imagesDestFiles));
};

/**
 * Compiles SASS files.
 */
const sassTask = () => {
  return gulp.src(settings.sassSrcFiles)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
      silenceDeprecations: ['legacy-js-api'],
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: [
        'last 3 versions',
        'not dead',
        'not IE 11'
      ]
    }))
    .pipe(gulp.dest(settings.sassDestFiles));
};

/**
 * Build task.
 */
const buildTask = gulp.series(cleanTask, gulp.parallel(fontsTask, imagesTask, sassTask, jsTask));

/**
 * Watcher.
 */
function watcherTask() {
  buildTask();
  gulp.watch(settings.fontsSrcFiles, fontsTask);
  gulp.watch(settings.imagesSrcFiles, imagesTask);
  gulp.watch(settings.sassSrcFiles, sassTask);
  gulp.watch(settings.jsSrcDirs, jsTask);
}

exports.default = buildTask;
exports.build = buildTask;
exports.clean = cleanTask;
exports.watch = watcherTask;