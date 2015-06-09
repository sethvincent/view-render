var path = require('path')
var fs = require('fs')
var extend = require('extend')

module.exports = function (dir, options) {
  if (typeof dir === 'object') {
    options = dir
    dir = options.dir
  }

  options = options || {}
  var views = {}
  views._views = {}
  views.dir = dir || path.join(__dirname, ('/views/'))
  views.data = options.data || {}
  views.template = options.template // handlebars.compile, lodash.template, or compatible template function
  views.ext = options.ext || '.html'

  views.render = function (view, data) {
    var data = extend(data || {}, views.data)
    if (options.live) return views.resolve(view)(data)
    return views._views[view](data)
  }

  views.addViews = function (cb) {
    var files = fs.readdirSync(views.dir)
    files.forEach(function (file) {
      views.add(file)
    })
  }

  views.add = function (file) {
    views._views[file.split('.')[0]] = views.resolve(file)
  }

  views.compile = function (filepath) {
    return views.template(fs.readFileSync(filepath, 'utf8'))
  }

  views.resolve = function (file) {
    return views.compile(views.dir + file)
  }

  views.all = function () {
    return views._views
  }

  views.addViews()
  return views
}
