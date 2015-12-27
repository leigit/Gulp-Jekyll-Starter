# Gulp-Jekyll-Starter

Project starter kit for using jekyll with gulp-sass and browsersync

## Changes to the Jekyll defaults
The _'_sass'_ dir has been removed and replaced by _'_scss'_

The _'main.scss'_ file has been removed from the _'css'_ dir
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

The below commands (both of them) should be run concurrently. The _gulp_ command compiles the Sass files and watches for any changes to the files in the _'dist'_ directory.
The _jekyll build ..._ command builds the jekyll project into the dist folder and watches for changes

#### Compile Sass

Run this command to compile sass and run the browsersync dev server

~~~
$ gulp
~~~

#### Build Jekyll and watch for changes
~~~
$ jekyll build --destination ../dist --watch
~~~