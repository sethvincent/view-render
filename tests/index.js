var test = require('tape')
var handlebars = require('handlebars')
var views = require('../index')

var v = views(__dirname + '/fixtures/', { template: handlebars.compile })

test('read views from directory', function (t) {
  var all = v.all()
  t.ok(all)
  t.equals(Object.keys(all).length, 2)
  t.end()
})

test('render a view', function (t) {
  var view = v.render('index')
  t.ok(view)
  t.equals(typeof view, 'string')
  t.equals(view, '<h1>awesome</h1>')
  t.end()
})

test('render a view with data', function (t) {
  var view = v.render('data', { title: 'cool' })
  t.ok(view)
  t.equals(typeof view, 'string')
  t.equals(view, '<h1>cool</h1>')
  t.end()
})