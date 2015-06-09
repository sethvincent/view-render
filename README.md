# view-render

manage the server-side html views of a node application.

## install

```
npm install --save view-render
```

## usage

```
var views = require('view-render')(__dirname + '/views/', { 
  template: handlebars.compile 
})
```

## api

### `views.render(filename, data)`

Returns string of compiled html.

### `views.all()`

Object of all views.

## license

[MIT](/LICENSE.md)