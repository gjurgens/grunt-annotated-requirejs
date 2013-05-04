# Options

For a full list of possible options, [see the r.js example build file](https://github.com/jrburke/r.js/blob/master/build/example.build.js).

This plugin adds the posibility to define regexp patterns into the r.js config to define which AMD modules will be treated as packages containing the module with all it's dependencies included in the same file.
The regexp will be tested against the content of all modules included in the baseUrl directory tree.
