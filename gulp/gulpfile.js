const { task, dest, watch } = require('gulp');
const { createProject } = require('gulp-typescript');

const tsProject = createProject(
  'tsconfig.json',
  {
    module: 'system',
    outFile: "./bundle.js",
  }
);

task('typescript', () => tsProject.src()
  .pipe(tsProject())
  .js.pipe(dest('.')));

// TODO: cannot read the tsProject files and convert them to string for watching...
task('watch', () => watch(['*.ts', '../shared/*.ts'], task('typescript')));

task('default', task('typescript'));
