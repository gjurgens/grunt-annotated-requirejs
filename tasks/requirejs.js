/*
 * grunt-annotated-requirejs
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Gabriel Jürgens, contributors
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var requirejs = require('requirejs');

  // TODO: extend this to send build log to grunt.log.ok / grunt.log.error
  // by overriding the r.js logger (or submit issue to r.js to expand logging support)
  requirejs.define('node/print', [], function() {
    return function print(msg) {
      if (msg.substring(0, 5) === 'Error') {
        grunt.log.errorlns(msg);
        grunt.fail.warn('RequireJS failed.');
      } else {
        grunt.log.oklns(msg);
      }
    };
  });

  grunt.registerMultiTask('requirejs', 'Build a RequireJS project.', function() {

    var done = this.async();
    var options = this.options({
      logLevel: 0
    });

    //Inject modules configurations using annotations
    var generateModulesList = function(baseUrl,regex) {
      return grunt.file.expand(baseUrl + "/**/*.js").filter(
        function(file){
          return regex.test(grunt.file.read(file));
        }
      ).map(function(file) {
        return {name: file.substring(baseUrl.length + 1,file.length - 3)};
      });
    };

    grunt.verbose.writeflags(options, 'Options');

    if(options.modules instanceof Array) {
      var modules = [];
      for(var i = 0; i < options.modules.length; i++) {
        modules.push(options.modules[i]);
        if(typeof options.modules[i] === "object") {
          if(options.modules[i].pattern !== undefined) {
            var pattern = "";
            if(options.modules[i].pattern instanceof RegExp) {
              pattern = options.modules[i].pattern;
            } else if (typeof options.modules[i].pattern === "string"){
              pattern = new RegExp(options.modules[i].pattern);
            }
            if(pattern !== "") {
              modules.pop();
              var basePath = "";
              if(options.appDir) {
                basePath += options.appDir + "/";
              }
              if(options.baseUrl) {
                basePath += options.baseUrl;
              }
              modules = modules.concat(generateModulesList(basePath,pattern)).filter(function(elem, pos, self) {
                return self.map(function(module){
                  return module.name;
                }).indexOf(elem.name) === pos;
              });
            }
          }
        }
      }
      options.modules = modules;
    }

    
   
    grunt.verbose.writeflags(options, 'Options');

    requirejs.optimize(options, function(response) {
      done();
    });
  });
};
