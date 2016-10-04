# garrus v0.6.0-alpha1

[![Build Status](https://travis-ci.org/fephil/garrus.svg?branch=master)](https://travis-ci.org/fephil/garrus)
[![devDependency Status](https://david-dm.org/fephil/garrus/dev-status.svg)](https://david-dm.org/fephil/garrus#info=devDependencies)
[![Dependency Status](https://david-dm.org/fephil/garrus.svg)](https://david-dm.org/fephil/garrus)

**A modern, opinionated frontend workflow for building a static website and blog.**

* Author: [Phil Lennon](https://frontendphil.com)
* Source: [github.com/fephil/garrus](https://github.com/fephil/garrus)
* Issues and Suggestions: [github.com/fephil/garrus/issues](https://github.com/fephil/garrus/issues)
* Download: [https://github.com/fephil/garrus/releases](https://github.com/fephil/garrus/releases)
* Twitter: [@frontendphil](https://twitter.com/frontendphil)
* Email: [enquiry@frontendphil.com](mailto:enquiry@frontendphil.com)

***

## About

Garrus is an 'all-in-one' workflow designed to quickly build a static website and blog using modern techniques in Frontend development. Use Garrus as a base, fork it and tailor to your specific needs.

This workflow contains:

* Gulp,
* Metalsmith (with Handlebars templates, JSON metadata, Blog and Markdown support)
* Webpack with jQuery integration,
* Babel with ES2015 support,
* SASS & PostCSS,
* Critical inlined CSS,
* Sass-mq & Susy grid system,
* Image minification,
* SVG spriting,
* HTML minification,
* StandardJS linting,
* CSS Stylelinting,
* Easy to use with simple Gulp tasks & configuration,

Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/fephil/garrus/issues) for more information about future enhancements and changes.

## Install

Download the latest stable release from [GitHub](https://github.com/fephil/garrus/releases). Once this has been done:

* Install Node V4 LTS or Node V6,
* Run in Terminal: `npm i gulp-cli -g` (Gulp does not need to be installed globally),
* Navigate to the workflow folder in command line Terminal,
* Run: `npm i`.

Please note that there are a large amount of development dependencies to install, due to the 'all in one' nature of the workflow. It could possibly take a long time to install all the required modules.

### Optional Installs

In your code editor of choice, the following plugins are recommended but not required. Note the plugin names might be slightly different depending on your editor.

* editorconfig,
* linter,
* linter-handlebars,
* linter-js-standard,
* linter-stylelint.

## Usage

Run these tasks in your command line Terminal:

`gulp [--production] [--debug]`

`gulp deploy [--production] [--debug]`

`gulp auditcode`

* The `gulp` task builds the website, watches for changes and starts up a sever,
* The `gulp deploy` task builds the website without watching for changes or running the server,
* The `gulp auditcode` task runs various linting on the project source files.
* The `--production` flag builds minified assets with no sourcemaps,
* The `--debug` flag shows the files being created in each task (if the task has a pipe).

More documentation is in progress.

## Credit

* Sample images come from [Unsplash](https://unsplash.com),
* Sample icons come from the [Street Support project](https://github.com/StreetSupport/streetsupport-web).

## License

MIT
