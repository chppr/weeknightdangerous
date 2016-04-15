//make sure you do this to get browser sync on your local machine:
//npm install -g browser-sync

var gulp = require('gulp'),
    util = require('gulp-util'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon'),
    //browser sync is not working at the moment
    browserSync = require('browser-sync').create(),
    shell = require('gulp-shell'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean-css');

//SASS
gulp.task('sass', function(){
  return gulp.src('sass/main.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('client/styles'))
});

//minify css
gulp.task('minify-css', function() {
  return gulp.src('client/styles/*.css')
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest('client/styles/min'));
});

gulp.task('concat-dep', function() {
  return gulp.src(['bower_components/angular-animate/angular-animate.js','bower_components/angulargrid/angulargrid.js', 'bower_components/angular-cookies/angular-cookies.js','bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js','bower_components/ngmap/build/scripts/ng-map.min.js'])
    .pipe(concat('scripts.js'))

    //.pipe(uglify())

    .pipe(gulp.dest('./client/scripts/'));
});

gulp.task('concat-app', function() {
  return gulp.src(['client/app/weather/weather.js','client/app/myApp.js','client/app/services/services.js','client/app/intro/intro.js','client/app/topNav/topNav.js','client/app/bkgd/bkgd.js','client/app/trailProfile/trailProfile.js','client/app/comment/comment.js','client/app/trailsList/trailsList.js', 'client/app/myFav/myFav.js'])
    .pipe(concat('app.js'))

    //.pipe(uglify())

    .pipe(gulp.dest('./client/scripts'));
});

//sync browser with changes
//this is not currently working
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//fire up our server
gulp.task('dev', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
});

//////DB Tasks//////
gulp.task('init-db', shell.task([
  'initdb db',
  'pg_ctl -D db -l logfile start',
  'createdb dev'
]));

gulp.task('restart-db', shell.task([
  'pkill postgres',
  'pg_ctl -D db -l logfile start'
]));

gulp.task('clear-db', shell.task([
  'dropdb dev',
  'createdb dev'
]));
//////END DB Tasks//////

//watch files
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('client/styles/main.css', ['minify-css']);
  gulp.watch(['client/app/myApp.js','client/app/**/*.js'],['concat-app']);
  gulp.watch(['client/app/myApp.js','client/app/**/*.js','client/app/**/*.html','client/app/styles/*.css']).on('change', browserSync.reload);
});

//run our default task
gulp.task('default', ['dev','sass','concat-dep','concat-app', 'minify-css','watch']);
gulp.task('deploy',[])

