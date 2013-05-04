# grunt-annotated-requirejs [![Build Status](https://travis-ci.org/gjurgens/grunt-annotated-requirejs.png?branch=master)](https://travis-ci.org/gjurgens/grunt-annotated-requirejs)

> Optimize RequireJS projects using r.js.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-annotated-requirejs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-annotated-requirejs');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.3](https://github.com/gruntjs/grunt-contrib-requirejs/tree/grunt-0.3-stable).*



## Requirejs task
_Run this task with the `grunt requirejs` command._

Task targets and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
### Options

For a full list of possible options, [see the r.js example build file](https://github.com/jrburke/r.js/blob/master/build/example.build.js).
### Usage Examples

```js
requirejs: {
  compile: {
    options: {
      baseUrl: "path/to/base",
      mainConfigFile: "path/to/config.js",
      out: "path/to/optimized.js"
    }
  }
}
```


## Release History

 * 2013-05-104   v0.1.0   First release after forking [contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs).

---

Task submitted by [Gabriel Jurgens](https://github.com/gjurgens/)

*This file was generated on Thu May 02 2013 20:45:00.*
