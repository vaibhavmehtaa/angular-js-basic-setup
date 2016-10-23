# angular-js-basic-setup

> Code is read much more often than it is written.

&#45; Jonh papa and pretty much any programmer worth their salt


## Project structure

We follow a sensible and low-maintenance project structure, wherein:
* all html files (templates, modal window) go into the `www/templates/` and `www/partials/` directory.
* all source files (Sass, JS) and assets (images, fonts, media files), go into the `src/` directory.
* all 3rd-party front-end dependencies ("vendor" files) go into the `bower_components/` directory.
* all development dependencies (`npm` packages) go into the `node_modules` directory.
* all production-ready files (CSS, JS, images, fonts), go into the `dist/` directory (`Auto generated`).
* all configuration files (`.editorconfig`, `package.json`, `bower.json`, `Gruntfile.js`) can be found in the project root.

In effect, this is what the project tree should look like:
```
.
+-- bower_components/
+-- node_modules/
+-- external_files/
+-- src/
	+-- fonts/
	+-- images/
	+-- js/
	+-- media/
	+-- scss/
+-- www    
	+-- config/
	+-- constants/
	+-- controllers/
	+-- directives/
	+-- factories/
	+-- filters/
	+-- partials/
	+-- modules/
	+-- services/
	+-- templates/
	+-- index.html
+-- dist/
	+-- fonts/
	+-- images/
	+-- js/
	+-- css/
+-- .editorconfig
+-- .eslintrc
+-- bower.json
+-- Gruntfile.js
+-- package.json
+-- README.md
```

## Configuring your text-editor

We use [EditorConfig](http://editorconfig.org/) to ensure that developers maintain consistent coding styles between different editors and IDEs. Install a suitable EditorConfig plugin for your favourite text-editor from [this page](http://editorconfig.org/#download). Once installed, the `.editorconfig` file should show up syntax-highlighted in your editor.

We also use an angular-flavoured configuration for `eslint`, to ensure that our codebase always remains readable. ESLint has plugins for [SublimeText](https://github.com/roadhump/SublimeLinter-eslint#installation) and [Atom](https://atom.io/packages/linter-eslint).


## Project setup

First-time project setup consists of:
* installing Node.js, `npm`, `bower`, `grunt-cli`, `eslint`
* installing Ruby, `gem` and `sass`
* installing dev-dependencies (`npm` packages)
* installing front-end dependencies (`bower` packages)
* setting up `grunt` to watch the project files for changes

Once you've installed Node.js and `npm` on your system, install `bower`, `grunt-cli` and `eslint` globally, like so:
```
$ npm install -g bower grunt-cli eslint
```

Once you've installed Ruby and `gem` on your system, install the `sass` gem like so:
```
$ gem install sass
```

Next, `cd` into the project root to install the dev-dependencies, like so:
```
$ cd <PROJECT_ROOT>
$ npm install
```

Installing the front-end dependencies is really easy:
```
$ bower install
```

Finally, fire up `grunt` to open up a web-browser, watch the filesystem for changes, and to live-reload the browser whenever there's a relevant change:
```
$ grunt
```

The last 3 steps have been packaged into a single `npm` script inside `package.json`:
```
$ npm start
```


## Installing new `npm` packages

We use Node.js only during development/testing and it is **not** required in a production environment. It follows that any `npm` dependencies will always be dev-dependencies, i.e., they must either:
* be put into the `devDependencies` section of the project's `package.json`, or
* be installed with the `--save-dev` flag, so that the dependency is *automatically* added to the `devDependencies` section of the project's `package.json`. Like so:
```
$ npm install --save-dev grunt-contrib-jshint
```

**Never** install `npm` packages with the `--save` flag, and **never** add `npm` packages to the `dependencies` section of the project's `package.json`.


## Installing new `bower` components

Always install a new `bower` dependency with the `--save` flag, like so:
```
$ bower install --save angular
```
Doing this will automatically add the new dependency to the project's `bower.json`
