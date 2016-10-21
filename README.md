# angular-js-basic-setup

> Code is read much more often than it is written.

&#45; Jonh papa and pretty much any programmer worth their salt


## Project structure

We follow a sensible and low-maintenance project structure, wherein:
* all source files (HTML, Sass, JS) and assets (images, fonts), go into the `src/` directory.
* all 3rd-party front-end dependencies ("vendor" files) go into the `bower_components/` directory.
* all development dependencies (`npm` packages) go into the `node_modules` directory.
* all production-ready files (HTML, CSS, JS, images, fonts), go into the `dist/` directory.
* all configuration files (`.editorconfig`, `package.json`, `bower.json`, `Gruntfile.js`) can be found in the project root.

In effect, this is what the project tree should look like:
```