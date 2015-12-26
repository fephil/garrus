# foley

[![Build Status](https://travis-ci.org/PJL101/foley.svg?branch=master)](https://travis-ci.org/PJL101/foley)
[![devDependency Status](https://david-dm.org/PJL101/foley/dev-status.svg)](https://david-dm.org/PJL101/foley#info=devDependencies)
[![Dependency Status](https://david-dm.org/PJL101/foley.svg)](https://david-dm.org/PJL101/foley)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**A modern, opinionated frontend workflow for building a static website and blog.**

Version: 0.1.0

* Author: [Phil Lennon](http://iampjl.co.uk)
* Source: [github.com/PJL101/foley](http://github.com/PJL101/foley)
* Issues and Suggestions: [github.com/PJL101/foley](http://github.com/PJL101/foley/issues)
* Twitter: [@PJL101](http://twitter.com/pjl101)
* Email: [enquiry@iampjl.co.uk](mailto:enquiry@iampjl.co.uk)

-

**Note:** This is in heavy development and is not ready for production use quite yet.

## About

Foley is an 'all-in-one' workflow designed to quickly build an optimised website and blog using the latest techniques in Frontend development. Use foley as a base and tailor to your specific needs.

This workflow contains:

* Gulp,
* Hugo (Super fantastic static website and blog generator),
* Webpack with jQuery integration,
* Babel with ES2015 support,
* Standardjs linting,
* Sass & PostCSS,
* CSS Stylelint with SUIT ruleset,
* Critical inlined CSS,
* Sass-mq & Susy grid system,
* Image minification,
* Gulpicon,
* HTML minification,
* Easy to use with simple tasks & configuration from global files,

Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/PJL101/foley/issues) for more information about future enhancements and changes.

## Install

Download the latest stable release from [GitHub](https://github.com/PJL101/foley/releases). Once this has been done:

* Install and setup Go 1.5,
* Install Hugo 0.15,
* Install Node 4 LTS or 5 stable (preferred),
* run `npm i gulp -g`,
* Navigate to the workflow folder in command line terminal,
* run `npm i`.

Please note, there are a large amount of development dependencies to install due to the 'all in one' nature of this workflow. It will take several minutes to install the modules.

### Optional Installs

The following plugins for Atom are recommended but not required:

* editorconfig,
* linter,
* linter-js-standard,
* linter-stylelint,
* tabs-to-spaces.

## Usage

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
