'use strict';
var gulp = require('gulp');
// Rather than have to specify each gulp plugin, gulp-load-plugins will search your packages.json file and automatically include them
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var sassdoc = require('sassdoc');
var sassGlob = require('gulp-sass-glob');


var appConfig = {
  src: 'app/',
  dest: 'dist/'
}

/* -------------------------------------- */
// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: appConfig.dest
    }
  })
})


/* -------------------------------------- */
// gulp compile sass

gulp.task('sass', function() {
 return gulp.src(appConfig.src + 'scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sassGlob())
    .pipe($.plumber()) // keep watching and log errors in the console
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({ // Passes it through a gulp-sass
      /* include sass from the bower_components folder */
      includePaths: ['app/bower_components']
      //errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 3 versions', 'ie 9']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(appConfig.src + '/css'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));

});

gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    //shortcutIcon: '/images/favicon.png',
  };

  return gulp.src('app/scss/**/*.scss')
    .pipe(sassdoc(options));
});

/* -------------------------------------- */
// Watch for file changes

gulp.task('watch', function () {
  gulp.watch(appConfig.src + 'scss/**/*.scss', ['sass']);
  gulp.watch(appConfig.src + '*.html', browserSync.reload);
  gulp.watch(appConfig.src + '*.md', browserSync.reload);
  gulp.watch(appConfig.src + '*.markdown', browserSync.reload);
  gulp.watch(appConfig.src + 'js/**/*.js', browserSync.reload);
});


// Build Sequences
// ---------------

// gulp - dev server + watch
gulp.task('default', function(callback) {
  runSequence(['sass'], 'browserSync', 'watch', callback);
});
