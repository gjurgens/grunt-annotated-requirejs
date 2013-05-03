var grunt = require('grunt');

exports['requirejs'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(1);

    expect = 'define("hello",[],function(){return"hello"}),define("sub/moon",[],function(){return"moon"}),define("world",["sub/moon"],function(){return"world"}),require(["hello","world"],function(e,t){console.log(e,t)}),define("project",function(){});';
    result = grunt.file.read('tmp/project.js');
    test.equal(expect, result, 'should optimize javascript modules with requireJS');

    test.done();
  },

  template: function(test) {
    'use strict';

    var expect, result;

    test.expect(1);

    expect = 'define("hello",[],function(){return"hello"}),define("sub/moon",[],function(){return"moon"}),define("world",["sub/moon"],function(){return"world"}),require(["hello","world"],function(e,t){console.log(e,t)}),define("project",function(){});';
    result = grunt.file.read('tmp/requirejs-template.js');
    test.equal(expect, result, 'should process options with template variables.');

    test.done();
  }
};
