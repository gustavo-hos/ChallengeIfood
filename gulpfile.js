var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var merge = require('merge-stream');
var babel = require('gulp-babel');
var npmlodash = require('lodash');
var smushit = require('gulp-smushit');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var browsersync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

const { parallel } = require('gulp');

const caption_show = 'true'
const dark_navbar = 'false';
const preset_theme = 'preset-1';
const header_theme = 'header-1';
const dark_layout = 'false'; 
const rtl_layout = 'false';
const box_container = 'false';
const version = 'v1.0';

if (rtl_layout == 'true') {
  var rtltemp = 'rtl';
} else {
  var rtltemp = 'ltr';
}

if (dark_layout == 'true') {
  var darklayouttemp = 'dark';
} else {
  var darklayouttemp = 'light';
}
if (dark_navbar == 'true') {
  var darknavbartemp = 'dark';
} else {
  var darknavbartemp = 'light';
}

const layout = {
  pc_caption_show: caption_show,
  pc_preset_theme: preset_theme,
  pc_header_theme: header_theme,
  pc_dark_navbar: dark_navbar,
  pc_dark_layout: dark_layout,
  pc_rtl_layout: rtl_layout,
  pc_box_container: box_container,
  pc_theme_version: version,
  bodySetup:
    'data-pc-header="' +
    header_theme +
    '" data-pc-preset="' +
    preset_theme +
    '" data-pc-sidebar-theme="' +
    darknavbartemp +
    '" data-pc-sidebar-caption="' +
    caption_show +
    '" data-pc-direction="' +
    rtltemp +
    '" data-pc-theme="' +
    darklayouttemp +
    '"'
};

const path = {
  src: {
    html: 'src/html/**/*.html',
    css: 'src/assets/scss/*.scss',
    layoutjs: 'src/assets/js/*.js',
    pagesjs: 'src/assets/js/pages/*.js',
    images: 'src/assets/images/**/*.{jpg,png}'
  },
  destination: {
    html: 'dist',
    css: 'dist/assets/css',
    layoutjs: 'dist/assets/js',
    pagesjs: 'dist/assets/js/pages',
    images: 'dist/assets/images'
  }
};

gulp.task('browserSync', function () {
  browsersync.init({
    server: 'dist/'
  });
});

gulp.task('cleandist', function (callback) {
  del.sync(['dist/*/']);
  callback();
});

gulp.task('sass', function () {

  return gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.destination.css));
});

gulp.task('build-node-modules', function () {
  var required_libs = {
    js: [
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/@popperjs/core/dist/umd/popper.min.js',
      'node_modules/simplebar/dist/simplebar.min.js',
      'node_modules/feather-icons/dist/feather.min.js',
      'node_modules/clipboard/dist/clipboard.min.js',
      'node_modules/apexcharts/dist/apexcharts.min.js',
      'node_modules/prismjs/prism.js',
      'node_modules/sweetalert2/dist/sweetalert2.all.min.js',
      'node_modules/vanillajs-datepicker/dist/js/datepicker-full.min.js',
      'node_modules/notifier-js/dist/js/notifier.js',
      'node_modules/bootstrap-slider/dist/bootstrap-slider.min.js',
      'node_modules/tiny-slider/dist/min/tiny-slider.js',
      'node_modules/intro.js/minified/intro.min.js',
      'node_modules/vanillatree/vanillatree.min.js',
      'node_modules/flatpickr/dist/flatpickr.min.js',
      'node_modules/choices.js/public/assets/scripts/choices.min.js',
      'node_modules/imask/dist/imask.min.js',
      'node_modules/nouislider/dist/nouislider.min.js',
      'node_modules/wnumb/wNumb.min.js',
      'node_modules/bootstrap-switch-button/dist/bootstrap-switch-button.min.js',
      'node_modules/type-ahead/src/type-ahead.min.js',
      'node_modules/simplemde/dist/simplemde.min.js',
      'node_modules/quill/dist/quill.min.js',
      'node_modules/dropzone/dist/min/dropzone-amd-module.min.js',
      'node_modules/uppy/dist/uppy.min.js',
      'node_modules/formbouncerjs/dist/bouncer.min.js',
      'node_modules/croppr/dist/croppr.min.js',
      'node_modules/simple-datatables/dist/umd/simple-datatables.js',
      'node_modules/simple-datatables/dist/module.js',
      'node_modules/datatables.net/js/dataTables.min.js',
      'node_modules/datatables.net-bs5/js/dataTables.bootstrap5.min.js',
      'node_modules/datatables.net-select/js/dataTables.select.min.js',
      'node_modules/datatables.net-autofill-bs5/js/autoFill.bootstrap5.min.js',
      'node_modules/datatables.net-keytable-bs5/js/keyTable.bootstrap5.min.js',
      'node_modules/datatables.net-scroller-bs5/js/scroller.bootstrap5.min.js',
      'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
      'node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js',
      'node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js',
      'node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js',
      'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
      'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
      'node_modules/datatables.net-autofill/js/dataTables.autoFill.min.js',
      'node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js',
      'node_modules/datatables.net-buttons/js/dataTables.buttons.min.js',
      'node_modules/datatables.net-buttons/js/buttons.colVis.min.js',
      'node_modules/datatables.net-buttons/js/buttons.print.min.js',
      'node_modules/datatables.net-buttons/js/buttons.html5.min.js',
      'node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
      'node_modules/pdfmake/build/pdfmake.min.js',
      'node_modules/jszip/dist/jszip.min.js',
      'node_modules/pdfmake/build/vfs_fonts.js',
      'node_modules/dragula/dist/dragula.min.js',
      'node_modules/fullcalendar/index.global.min.js',
      'node_modules/wow.js/dist/wow.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/fslightbox/index.js',
      'node_modules/jsvectormap/dist/js/jsvectormap.min.js',
      'node_modules/jsvectormap/dist/maps/world.js',
      'node_modules/jsvectormap/dist/maps/world-merc.js',
      'node_modules/star-rating.js/dist/star-rating.min.js',
      'node_modules/vanilla-wizard/dist/js/wizard.min.js',
      'node_modules/peity-vanilla/dist/peity-vanilla.min.js',
      'node_modules/swiper/swiper-bundle.js'
    ],
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/animate.css/animate.min.css',
      'node_modules/prismjs/themes/prism-coy.css',
      'node_modules/vanillajs-datepicker/dist/css/datepicker-bs5.min.css',
      'node_modules/notifier-js/dist/css/notifier.css',
      'node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css',
      'node_modules/tiny-slider/dist/tiny-slider.css',
      'node_modules/intro.js/minified/introjs.min.css',
      'node_modules/vanillatree/vanillatree.css',
      'node_modules/flatpickr/dist/flatpickr.min.css',
      'node_modules/nouislider/dist/nouislider.min.css',
      'node_modules/bootstrap-switch-button/css/bootstrap-switch-button.min.css',
      'node_modules/simplemde/dist/simplemde.min.css',
      'node_modules/quill/dist/quill.core.css',
      'node_modules/quill/dist/quill.snow.css',
      'node_modules/quill/dist/quill.bubble.css',
      'node_modules/dropzone/dist/min/dropzone.min.css',
      'node_modules/uppy/dist/uppy.min.css',
      'node_modules/croppr/dist/croppr.min.css',
      'node_modules/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css',
      'node_modules/datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css',
      'node_modules/datatables.net-colreorder-bs5/css/colReorder.bootstrap5.min.css',
      'node_modules/datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css',
      'node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css',
      'node_modules/datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css',
      'node_modules/datatables.net-keytable-bs5/css/keyTable.bootstrap5.min.css',
      'node_modules/datatables.net-autofill-bs5/css/autoFill.bootstrap5.min.css',
      'node_modules/datatables.net-select-bs5/css/select.bootstrap5.min.css',
      'node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css',
      'node_modules/datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css',
      'node_modules/dragula/dist/dragula.min.css',
      'node_modules/simple-datatables/dist/style.css',
      'node_modules/jsvectormap/dist/css/jsvectormap.min.css',
      'node_modules/star-rating.js/dist/star-rating.min.css',
      'node_modules/swiper/swiper-bundle.css'
    ]
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == 'css') {
      gulp.src(assets).pipe(gulp.dest('dist/assets/css/plugins'));
    } else {
      gulp.src(assets).pipe(gulp.dest('dist/assets/js/plugins'));
    }
  });

  var cpyassets = gulp.src(['src/assets/**/*.*', '!src/assets/scss/**/*.*']).pipe(gulp.dest('dist/assets'));

  var modules = gulp.src(['login.js', 'dashboard.js', 'configuracoes.js', 'esqueci-a-senha.js', 'estoque.js', 'relatorios.js', 'pagamentos.js'].map(file => `src/assets/js/pages/${file}`))
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(gulp.dest(path.destination.pagesjs));

  return merge(cpyassets, modules);
});

gulp.task('build-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});

gulp.task('build-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(gulp.dest(path.destination.layoutjs));

  var pagesjs = gulp.src(path.src.pagesjs).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});

gulp.task('watch', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('sass')).on('change', browsersync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series('build-js')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('build-html')).on('change', browsersync.reload);
});

const compile = parallel('browserSync', 'watch');

gulp.task('default', gulp.series('cleandist', 'build-node-modules', 'sass', 'build-js', 'build-html', compile));

gulp.task('min-css', function () {
  return gulp.src(path.src.css).pipe(sass()).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest(path.destination.css));
});

gulp.task('min-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(uglify()).pipe(gulp.dest(path.destination.layoutjs));

  var pagesjs = gulp.src(path.src.pagesjs).pipe(babel()).pipe(uglify()).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});

gulp.task('min-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});

function compressImagesWithRetry(src, dest, retries = 40) {
  return new Promise((resolve, reject) => {
    const stream = gulp
      .src(src)
      .pipe(
        smushit({
          verbose: true
        })
      )
      .on('error', function (err) {
        console.error('Error during image compression:', err.toString());
        if (retries > 0) {
          compressImagesWithRetry(src, dest, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject(new Error('Max retries exceeded. Unable to compress image.'));
        }
      });

    stream.on('end', () => resolve());
    stream.pipe(gulp.dest(dest));
  });
}
gulp.task('min-image', function () {
  return compressImagesWithRetry(path.src.images, path.destination.images);
});

gulp.task('watch-minify', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('min-css'));
  gulp.watch('src/assets/js/**/*.js', gulp.series('min-js'));
  gulp.watch('src/html/**/*.html', gulp.series('min-html'));
});

gulp.task('build-prod', gulp.series('cleandist', 'build-node-modules', 'min-css', 'min-js', 'min-html'));
