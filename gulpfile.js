const gulp = require("gulp");
const fs = require("fs");
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const EventEmitter = require('events').EventEmitter;
const sass = require('gulp-sass');
const process = require('process');
const IGNITE_IMPORT_REG_EXP = new RegExp(/(~)(igniteui-angular)/g);

const fileName = "styles.scss";
const STYLES_FOR_PREFIXING = fs.readFileSync("./src/styles.scss", "utf8").
    replace(IGNITE_IMPORT_REG_EXP, "./node_modules/$2");
fs.writeFileSync(fileName, STYLES_FOR_PREFIXING);

const tsNode = require('ts-node').register({
    fast: true,
    ignore: [/\/node_modules\/(?!igniteui-angular)/],
    compilerOptions: {
        allowJs: true
    }
});

const GLOBAL_STYLES = {
    SRC: fileName,
    DIST: './src/styles',
    MAPS: './maps',
    CONFIG: {
        outputStyle: 'compact'
    }
};

//  Workaround for exception with Excel samples running product code during generate-live-editing task.
navigator = { language: "en-US" };

function requireFile(path) {
    delete require.cache[require.resolve(path)];
    return require(path);
}

gulp.task("generate-live-editing", () => {
    requireFile("./live-editing/LiveEditingManager.ts");

    gulp.start("build-style");
});

gulp.task("watch-live-editing", ["generate-live-editing"], () => {
    gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"], function () {
        Object.keys(require.cache).forEach(function (key) {
            if (key.indexOf("node_modules") === -1) {
                delete require.cache[key];
            }
        });

        gulp.start("generate-live-editing");
    });
});

gulp.task("sass-js-compile-check", async () => {
    var checker = requireFile("./live-editing/services/SassJsCompileChecker.ts");
    await checker.sassJsCompileChecker.run();
});

gulp.task('autoprefix-styles', () => {
    const prefixer = postcss([autoprefixer({
        browsers: ['last 5 versions', '> 3%'],
        cascade: false,
        grid: true
    })]);
    const myEventEmitter = new EventEmitter();

    return gulp.src(GLOBAL_STYLES.SRC)
        .pipe(sourcemaps.init())
        .pipe(sass.sync(GLOBAL_STYLES.CONFIG).on('error', err => {
            sass.logError.bind(myEventEmitter)(err);
            myEventEmitter.emit('end');
            process.exit(1);
        }))
        .pipe(prefixer)
        .pipe(sourcemaps.write(GLOBAL_STYLES.MAPS))
        .pipe(gulp.dest(GLOBAL_STYLES.DIST));

});

gulp.task('build-style', ['autoprefix-styles'], () => {
    fs.unlinkSync(fileName);
});

gulp.task('generate-styles-css', () => {
    // read styles.scss
    // compiles with SassCompiler
    // run auto prefixera
    // write next to styles.scss the new file style.css
});

