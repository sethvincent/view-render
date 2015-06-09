# view-render

manage the server-side html views of a node application.

## install

```
npm install --save view-render
```

## usage

```
var v = views(__dirname + '/views/', { 
  template: handlebars.compile 
})
```

## api

### `v.render(filename, data)`

Returns string of compiled html.

### `v.all()`

Object of all views.

## license

[MIT](/LICENSE.md)