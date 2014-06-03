define(['hogan'], function(Hogan) {
  var t = {
    'src/template/index/index' : new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1>HELLO WORLD!</h1>");return _.fl();;})
  },
  r = function(n) {
    var tn = t[n];
    return function(c, p, i) {
      return tn.render(c, p || t, i);
    };
  };
  return {
    'src/template/index/index' : r('src/template/index/index')
  };
});
