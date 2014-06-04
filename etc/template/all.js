var Hogan = require('hogan.js');
var t = {
  'col' : new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("/*File: ");_.b(_.v(_.f("file",c,p,0)));_.b("*/");_.b("\n" + i);_.b("/*global define*/");_.b("\n" + i);_.b("\n" + i);_.b("define([");_.b("\n" + i);_.b("    \"jquery\",");_.b("\n" + i);_.b("    \"underscore\",");_.b("\n" + i);_.b("    \"backbone\",");_.b("\n" + i);_.b("    \"setup\",");_.b("\n" + i);_.b("    \"pubsub\",");_.b("\n" + i);_.b("    \"path/to/model\"");_.b("\n" + i);_.b("], function ($, _, Backbone, Setup, pubsub, model) {");_.b("\n" + i);_.b("\n" + i);_.b("    \"use strict\";");_.b("\n" + i);_.b("    var ");_.b(_.v(_.f("name",c,p,0)));_.b(" = Backbone.Collection.extend({");_.b("\n" + i);_.b("\n" + i);_.b("        \"url\": Setup.baseUrl + \"some path/\",");_.b("\n" + i);_.b("        \"model\": model,");_.b("\n" + i);_.b("\n" + i);_.b("        ////////////////////////////////////////////////////////");_.b("\n" + i);_.b("        initialize: function () {");_.b("\n" + i);_.b("\n" + i);_.b("        }");_.b("\n" + i);_.b("    });");_.b("\n" + i);_.b("    return ");_.b(_.v(_.f("name",c,p,0)));_.b(";");_.b("\n" + i);_.b("});");_.b("\n");return _.fl();;}),
  'model' : new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("/*File: ");_.b(_.v(_.f("file",c,p,0)));_.b("*/");_.b("\n" + i);_.b("/*global define*/");_.b("\n" + i);_.b("\n" + i);_.b("define([");_.b("\n" + i);_.b("	\"jquery\",");_.b("\n" + i);_.b("    \"underscore\",");_.b("\n" + i);_.b("    \"backbone\",");_.b("\n" + i);_.b("    \"setup\"");_.b("\n" + i);_.b("], function ($, _, Backbone, Setup) {");_.b("\n" + i);_.b("    \"use strict\";");_.b("\n" + i);_.b("\n" + i);_.b("    var ");_.b(_.v(_.f("name",c,p,0)));_.b(" = Backbone.Model.extend({");_.b("\n" + i);_.b("        \"idAttribute\": \"_id\",");_.b("\n" + i);_.b("        \"initialize\": function () {");_.b("\n" + i);_.b("\n" + i);_.b("        }");_.b("\n" + i);_.b("    });");_.b("\n" + i);_.b("    return ");_.b(_.v(_.f("name",c,p,0)));_.b(";");_.b("\n" + i);_.b("});");_.b("\n");return _.fl();;}),
  'view' : new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("/*File: ");_.b(_.v(_.f("file",c,p,0)));_.b("*/\r");_.b("\n" + i);_.b("/*global define*/\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("define([\r");_.b("\n" + i);_.b("    \"jquery\",\r");_.b("\n" + i);_.b("    \"underscore\",\r");_.b("\n" + i);_.b("    \"backbone\",\r");_.b("\n" + i);_.b("    \"templates\"\r");_.b("\n" + i);_.b("], function ($, _, Backbone, templates) {\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("    \"use strict\";\r");_.b("\n" + i);_.b("    var ");_.b(_.v(_.f("name",c,p,0)));_.b(" = Backbone.View.extend({\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("        el: $(\"#somewhere\"),\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("        render: function () {\r");_.b("\n" + i);_.b("            var rslt = templates[\"something\"]({data: true});\r");_.b("\n" + i);_.b("            this.$el.html(rslt);\r");_.b("\n" + i);_.b("        }\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("    });\r");_.b("\n" + i);_.b("    return ");_.b(_.v(_.f("name",c,p,0)));_.b(";\r");_.b("\n" + i);_.b("});\r");_.b("\n");return _.fl();;})
},
r = function(n) {
  var tn = t[n];
  return function(c, p, i) {
    return tn.render(c, p || t, i);
  };
};
module.exports = {
  'col' : r('col'),
  'model' : r('model'),
  'view' : r('view')
};