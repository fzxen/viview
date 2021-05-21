/* eslint-disable */
const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefix = require("gulp-autoprefixer");
const uglifycss = require("gulp-uglifycss");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const path = require("path");

sass.compiler = require("sass");

const ab = (relative) => path.resolve(__dirname, relative);

const src = ab("../packages/theme/index.scss");
const name = "viview.css";
const minName = "viview.min.css";

async function buildStyle() {
  await gulp
    .src(src)
    .pipe(sass({ style: "expanded" }))
    .pipe(autoprefix())
    .pipe(rename(name))
    .pipe(gulp.dest(ab("../dist/")))
    .pipe(rename(minName))
    .pipe(minifycss())
    .pipe(uglifycss())
    .pipe(gulp.dest(ab("../dist/")));
}

exports.build = async function () {
  gulp.series(buildStyle);
};

exports.watch = async function () {
  gulp.watch(ab("../packages/theme/**/*.scss"), buildStyle);
};
