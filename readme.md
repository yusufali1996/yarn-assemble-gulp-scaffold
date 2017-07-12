## Yarn + Assemble + Webpack + Gulp + Foundation 6 Scaffold

### A simple and easy to use project scaffold for microsites and small applications.

### Project Overview
As a need to simplify and make consistent the front end workflow, this framework builds upon the standard Rokkan front end framework with some of the latest modern dependency managers, static build tools, and with out of the box support for ES6 with conversion through the Babel transpiler. 

### Project Reqirements
1. Node v7.0.0
2. Yarn `brew install yarn` [https://yarnpkg.com/en/](https://yarnpkg.com/en/)
3. Gulp CLI version 3.9.1, Gulp Local version 3.9.1

### Getting Started
This project will eventually be located within the Rokkan Yeoman generator; however, for the time being, please download this repository to your system, and rename it to whatever you'd live (given your project settings).

### Installation and Running
1. Once you've downloaded the project, please run `yarn install`. This will install all of the project's packaged dependencies (into `node_modules`) just like NPM would. Yarn is just like NPM — but a little smarter, and a little faster. Read up on the goodness of Yarn here: [https://yarnpkg.com](https://yarnpkg.com)
2. Once the installation is complete, you should just be able to run `gulp build`. If your project builds — you've successfully instantiated the build and are ready to get developing. Any errors you incur, please contact [tech@rokkandev.com](mailto:tech@rokkandev.com)

### Yarn
"FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT." Yarn caches every package it downloads so it never needs to download it again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.

In short, we're using Yarn over NPM, read more here: [https://yarnpkg.com/en/](https://yarnpkg.com/en/)

### Navigating the file structure
* yarn.lock - Yarn dependency version file, keeps everything in sync across systems.* source - The main folder where you'll do most of your building (JS, Handlebars, SCSS).* package.json - The standard NPM package folder.* node_modules - Node modules installed via Yarn.* gulpfile.js - Your main gulpfile which contains all of the tasks you'll be running on build.
* gulp-tasks - This folder contains partialized gulp tasks, keeping the gulpfile much more concise.* *build* - This folder is generated on build, and contains your static assets.* .gitignore - The git ignore file, remember this is shared — be mindful of what you add here.* .gitattributes - The git attributes folder which sets simple git params for the CLI.* .eslintrc.js - This is the eslint config file which sets up how eslint lints your JS. * .browserslistrc - This is a shared browser list used by autoprefixed when parsing CSS.

### Included Gulp Tasks
1. `gulp build` - builds entire site, runs in sequence:
	1. `'clean:build', 'assemble', 'images', 'sass', 'autoprefixer', 'wst', 'modernizr', 'compress', 'watch'`

#### Sub module Tasks (gulp)
1. `'clean:build'` - cleans the build folder prior to building
2. `'assemble'` - runs assemble
3. `'images'` - optimizes images using imagemin and imagemin-guetzli
4. `'sass'` - convers scss to sass, includes pipe to foundation 6 for sites, generates sourcemaps
5. `'autoprefixer'` - autoprefixes styles using a shared .browserslistrc (same as browserslist array)
6. `'wst'` - webpack site transpiler via babel and eslint
7. `'modernizr'` - generates a custom modernizr test and outputs js, minified to the js folder
8. `'compress'` - compresses JS via uglify and pump
9. `'watch'` - simple watch for assets / views 

### Working with Assemble
Assemble is a static site generator that uses a variety of templating tools to generate static HTML from partials. This build makes use of the handlebars (.hbs) template language; however, you can pretty much swap this engine out for one of your liking (we like Pug (formerly Jade)) if you're short on inspiration. Note: changing template logic will require you to update the gulpfile and assemble template engine values.

#### Source Folders
The source folder maintains all of the source assets you'll be editing. These include JS, SCSS, and .hbs views.

* assets - contains your scss, js, media, font, icon and image assets
* data - is a container for JSON data or other helper data for assemble or JS
* helpers - is a container for useful helper functions for assemble
* views - contains all of your layouts, partials, and pages for assemble (the HTML guts)
* views/layouts - contains your main layout files (the overarching container that includes your header, footer and body)
* views/pages - contains our views, or pages (the contents of the body)
* views/partials - reusable partial files as well as main header and footer

Read up on assemble here [https://github.com/assemble/assemble](https://github.com/assemble/assemble)

### Sass and Foundation for Sites
Foundation is included via npm through the gulp pipeline. If you wish to forgo the use of foundation, simply remove the includes from styles.scss, and delete the _settings.scss file from the base folder within the scss directory.

Foundation in this build includes the improved flexbox grid.

### Working with SASS
The /assets/scss directory contains all of your sass partials, which are finally included in the styles.scss file. The /base subfolder in this directory contains all of the base style attributes, as well as a `_settings.scss` *foundation settings override* and `_paths.scss`, a global paths variable for mixins.

#### SASS Folder Structure
1. base - base styles, global styles, configurable bits (foundation settings / paths)
2. elements - large component blocks
3. mixins - mixin libraries here
4. modules - reusuable modules
5. pages - thematic page styles (useful for css grids, susy etc.)
6. utilities - utility styles (margins, paddings, etc.)
7. vendor - vendor scss/css libs that cannot otherwise be included via npm

### Working with JS and Webpack
JS from this build is compiled via Webpack using Babel and eslint. jQuery is available as well using provide plugin

`
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
]

### Deployment via Deploybot
This build preferences deploment via 3rd party CUI tools such as jenkins or deploybot.


### Future Considerations and todos
1. @todo webpack only compilation
2. @todo additional es6 demos
3. @todo css grids
4. @todo prod/dev flags on gulp
5. @todo add browsersync
6. @todo shared paths file for gulp file



Readme updated 7.11.17