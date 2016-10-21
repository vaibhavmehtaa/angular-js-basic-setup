# angular-js-basic-setup

> Code is read much more often than it is written.

&#45; Jonh papa and pretty much any programmer worth their salt


## Project structure

We follow a sensible and low-maintenance project structure, wherein:
* all html files (templates, modal window) go into the `www/templates/` and `www/partials/` directory.
* all source files (Sass, JS) and assets (images, fonts, media files), go into the `src/` directory.
* all 3rd-party front-end dependencies ("vendor" files) go into the `bower_components/` directory.
* all development dependencies (`npm` packages) go into the `node_modules` directory.
* all production-ready files (CSS, JS, images, fonts), go into the `dist/` directory.
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
    +-- modals/
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

