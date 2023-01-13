/***********************************************************
 * Imports
 ***********************************************************/
const gulp = require("gulp");
// const ts = require("gulp-typescript");

/***********************************************************
 * Constants
 ***********************************************************/
// const tsProject = ts.createProject("tsconfig.debugger.json"); //TODO:
const IN_DIR = ".";
const OUT_DIR = "dist";

/***********************************************************
 * Pipeline
 ***********************************************************/

// Compile to Typescript
// gulp.task("compile", function () { //TODO
//     return tsProject
//         .src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest(OUT_DIR));
// });

// Copy json files (e.g. localization json) from IN_DIR to OUT_DIR
gulp.task("json-debugger", function () {
    return gulp
        .src(`${IN_DIR}/debugger/*.json`)
        .pipe(gulp.dest(`${OUT_DIR}/debugger`));
});

// Copy json files (e.g. localization json) from IN_DIR to OUT_DIR
gulp.task("json-lambda", function () {
    return gulp
        .src(`${IN_DIR}/lambda/*.json`)
        .pipe(gulp.dest(`${OUT_DIR}/lambda`));
});

// Run defined tasks 
gulp.task("default", gulp.parallel([/*"compile", */ "json-debugger", "json-lambda"]));
