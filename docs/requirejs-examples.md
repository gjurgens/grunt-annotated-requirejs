# Usage Examples

## Gruntfile.js

```js
requirejs: {
  compile: {
    options: {
      baseUrl: 'test/fixtures',
      dir: 'tmp',
      modules: [{pattern: /\/\/.*@packageModule/}]
    }
  }
}
```

## project.js

```js
//@packageModule
require(['hello', 'world'], function(hello, world) {
  console.log(hello,world);
});
```
