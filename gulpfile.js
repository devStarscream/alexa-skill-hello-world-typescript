var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var OUT_DIR = "dist";
var IN_DIR = "lambda";

// compile typescript
gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(OUT_DIR));
});

// copy json files (e.g. localization json)
gulp.task("json", function () {
    return gulp
        .src(`${IN_DIR}/custom/*.json`)
        .pipe(gulp.dest(`${OUT_DIR}/custom`));
});

// gulp.task("json-local", function () {
//     return gulp
//         .src(`${IN_DIR}/local/*.json`)
//         .pipe(gulp.dest(`${OUT_DIR}/local`));
// });

// gulp.task("default", gulp.parallel(["compile", "json", "json-local"]));
gulp.task("default", gulp.parallel(["compile", "json"]));
