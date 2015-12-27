# Gulp-Jekyll-Starter

Project starter kit for using jekyll with gulp-sass and browsersync

## Changes to the Jekyll defaults
The _'_sass'_ dir has been removed and replaced by scss
The _'main.scss'_ file has been removed from the css dir
## Initialization

Install Node dependencies

~~~
$ npm install
~~~

Install Bower dependencies

~~~
$ bower install
~~~

## Usage

### Development

This project uses [Gulp]() to watch for changes in HTML, Sass, JS, images. Whenever a file is changed, the project is recompiled.

#### Compile Sass

Run this command to compile sass and run the browsersync dev server

~~~
$ gulp
~~~

#### Build Jekyll and watch for changes
~~~
$ jekyll build --destination ../dist --watch
~~~

### Production

Run this command to build for production. Minified files are found under the `dist` folder

~~~
$ gulp build
~~~