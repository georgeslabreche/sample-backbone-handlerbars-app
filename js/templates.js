this["JST"] = this["JST"] || {};

this["JST"]["templates/result.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    	<li> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label>Results!</label>\n<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.fruits : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>	";
},"useData":true});

this["JST"]["templates/search.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label>"
    + container.escapeExpression(((helper = (helper = helpers.search_label || (depth0 != null ? depth0.search_label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"search_label","hash":{},"data":data}) : helper)))
    + "</label>\n<input type=\"text\" id=\"search_input\" />\n<input type=\"button\" id=\"search_button\" value=\"Search\" />	";
},"useData":true});