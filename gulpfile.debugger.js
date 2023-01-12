/***********************************************************
 * Imports
 ***********************************************************/
const gulp = require("gulp");
const ts = require("gulp-typescript");

/***********************************************************
 * Constants
 ***********************************************************/
const tsProject = ts.createProject("tsconfig.debugger.json");
const IN_DIR = "src/debugger";
const OUT_DIR = "dist";


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
        .src(`${IN_DIR}/*.json`)
        .pipe(gulp.dest(`${OUT_DIR}/debugger`));
});

// Run defined tasks 
gulp.task("default", gulp.parallel(["compile", "json"]));
