# foley v0.4.2

[![Build Status](https://travis-ci.org/fephil/foley.svg?branch=master)](https://travis-ci.org/fephil/foley)
[![devDependency Status](https://david-dm.org/fephil/foley/dev-status.svg)](https://david-dm.org/fephil/foley#info=devDependencies)
[![Dependency Status](https://david-dm.org/fephil/foley.svg)](https://david-dm.org/fephil/foley)

**A modern, opinionated frontend workflow for building a static website and blog.**

* Author: [Phil Lennon](https://frontendphil.com)
* Source: [github.com/fephil/foley](https://github.com/fephil/foley)
* Issues and Suggestions: [github.com/fephil/foley/issues](https://github.com/fephil/foley/issues)
* Download: [https://github.com/fephil/foley/releases](https://github.com/fephil/foley/releases)
* Twitter: [@frontendphil](https://twitter.com/frontendphil)
* Email: [enquiry@frontendphil.com](mailto:enquiry@frontendphil.com)

***

## About

Foley is an 'all-in-one' workflow designed to quickly build a static website and blog using the latest techniques in Frontend development. Use foley as a base and tailor to your specific needs.

This workflow contains the following key features:

* Gulp,
* Metalsmith (with Handlebars templates, JSON Data, Blog & Markdown support)
* Webpack with jQuery integration,
* Babel with ES2015 support,
* Standardjs linting,
* Sass & PostCSS,
* CSS Stylelint with SUIT ruleset,
* Critical inlined CSS,
* Sass-mq & Susy grid system,
* Image minification,
* SVG sprite,
* HTML minification,
* Easy to use with simple Gulp tasks & configuration from global files,

Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/fephil/foley/issues) for more information about future enhancements and changes.

## Install

Download the latest stable release from [GitHub](https://github.com/fephil/foley/releases). Once this has been done:

* Install Node 4 LTS,
* (Recommended) Run in Terminal: `npm i npm -g` (Update to latest NPM 3 version),
* Run in Terminal: `npm i gulp-cli -g` (Gulp does not need to be installed globally),
* Navigate to the workflow folder in command line Terminal,
* Run: `npm i`.

Please note that there are a large amount of development dependencies to install, due to the 'all in one' nature of this workflow. It could possibly take a long time to install all the required modules.

### Optional Installs

In your code editor of choice, the following plugins are recommended but not required. Note the plugin names might be slightly different depending on your editor.

* editorconfig,
* linter,
* linter-handlebars,
* linter-js-standard,
* linter-stylelint,
* tabs-to-spaces.

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

* Sample images from Unsplash,
* Sample icons from the Street Support project.

## License

MIT

**Have a nice day!**
