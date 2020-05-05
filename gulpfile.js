var gulp = require('gulp');
var uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
var env = process.env.NODE_ENV;
const eslint = require('gulp-eslint');
const gulpStylelint = require('gulp-stylelint');


// gulp.task('compresshtml', () => {
  // return gulp.src('src/*.html')
    // .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(gulp.dest('compresshtml'));
// }	);


task('eslintt', () => {
    return src(['scripts/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}
);


gulp.task('babell', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
		{
  "presets": ["env"]
}
);


gulp.task('lint-css', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
 
  return gulp
    .src('src/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

);


		
		