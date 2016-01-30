# foley v0.2.0

[![Build Status](https://travis-ci.org/PJL101/foley.svg?branch=master)](https://travis-ci.org/PJL101/foley)
[![devDependency Status](https://david-dm.org/PJL101/foley/dev-status.svg)](https://david-dm.org/PJL101/foley#info=devDependencies)
[![Dependency Status](https://david-dm.org/PJL101/foley.svg)](https://david-dm.org/PJL101/foley)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**A modern, opinionated frontend workflow for building a static website and blog.**

* Author: [Phil Lennon](http://iampjl.co.uk)
* Source: [github.com/PJL101/foley](http://github.com/PJL101/foley)
* Issues and Suggestions: [github.com/PJL101/foley/issues](http://github.com/PJL101/foley/issues)
* Twitter: [@PJL101](http://twitter.com/pjl101)
* Email: [enquiry@iampjl.co.uk](mailto:enquiry@iampjl.co.uk)

-

## About

Foley is an 'all-in-one' workflow designed to quickly build a static website and blog using the latest techniques in Frontend development. Use foley as a base and tailor to your specific needs.

This workflow contains the following key features:

* Gulp,
* Metalsmith (with Handlebars templates, Blogging & Markdown support)
* Webpack with jQuery integration,
* Babel with ES2015 support,
* Standardjs linting,
* Sass & PostCSS,
* CSS Stylelint with SUIT ruleset,
* Critical inlined CSS,
* Sass-mq & Susy grid system,
* Image minification,
* Gulpicon SVG support,
* HTML minification,
* Easy to use with simple Gulp tasks & configuration from global files,

Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/PJL101/foley/issues) for more information about future enhancements and changes.

## Install

Download the latest stable release from [GitHub](https://github.com/PJL101/foley/releases). Once this has been done:

* Optional: Install PhantomJS, using Homebrew or similar package manager,
* Install Node 4 LTS or 5 stable (preferred),
* run in Terminal: `npm i gulp -g`,
* Navigate to the workflow folder in command line Terminal,
* run: `npm i`.

Please note, there are a large amount of development dependencies to install due to the 'all in one' nature of this workflow. It could possibly take several minutes to install the modules.

### Optional Installs

The following plugins for Atom are recommended but not required:

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

### Tasks

* The `gulp` task builds the website, watches for changes and starts up a sever,
* The `gulp deploy` task builds the website without watching for changes or running the server,
* The `gulp auditcode` task runs various linting on the project source files.

### Flags

* The `--production` flag builds minified assets with no sourcemaps,
* The `--debug` flag shows the files being created in each task (if the task has a pipe).

## Known issues

* Gulpicon assets are not automatically copied into website,
* No full documentation yet - [#35](https://github.com/PJL101/foley/issues/35),
* No fully featured example website yet - [#44](https://github.com/PJL101/foley/issues/44).

## Credit

* Sample images from Unsplash.
* Sample icons from gulpicon.

**Have a nice day!**
