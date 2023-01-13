/***********************************************************
 * Imports
 ***********************************************************/
const gulp = require("gulp");
const ts = require("gulp-typescript");

/***********************************************************
 * Constants
 ***********************************************************/
var tsProject = ts.createProject("tsconfig.json");
const IN_DIR = "src";
const OUT_DIR = "dist/lambda";

/***********************************************************
 * Pipeline
 ***********************************************************/

// Compile to Typescript
gulp.task("compile", function () {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(OUT_DIR));
});

// Copy json files (e.g. localization json) from IN_DIR to OUT_DIR
gulp.task("json", function () {
    return gulp
        .src(`${IN_DIR}/lambda/*.json`)
        .pipe(gulp.dest(`${OUT_DIR}`));
});

// Run defined tasks 
gulp.task("default", gulp.parallel(["compile", "json"]));