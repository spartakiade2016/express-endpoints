'use strict';

module.exports = function () {

  return function (req, res) {
    var result = req.app._router.stack.filter(function (stack) {
      return stack.route;
    }).map(function (stack) {
      return stack.route;
    }).reduce(function (map, route) {
      var methods = Object.keys(route.methods).map(function (method) {
        return method.toUpperCase();
      });
      map[route.path] = (map[route.path] || []).concat(methods);
      return map;
    }, {});

    res.send(result);
  };

};
