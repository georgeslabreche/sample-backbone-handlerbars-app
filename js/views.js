var ResultView = Backbone.View.extend({
	template: JST["templates/result.hbs"],
  	initialize: function(){
      this.render();
    },
    render: function(){

	    var apple = new Fruit({ name: "Apple" });
	    var banana = new Fruit({ name: "Banana" });
	    var durian = new Fruit({ name: "Durian" });
	    var orange = new Fruit({ name: "Orange" });

	    var myFruitBasket = new FruitBasket([apple, banana, durian, orange])

	    this.$el.html(this.template({fruits: myFruitBasket.toJSON()}));  
    },
});;
var SearchView = Backbone.View.extend({
		
	template: JST["templates/search.hbs"],
  	initialize: function(){
      this.render();
    },
    render: function(){
	    var variables = { search_label: "My Search, yo" };
	    this.$el.append(this.template(variables)); 
    },
    events: {
      "click input[type=button]": "doSearch"
    },
    doSearch: function( event ){
      // Button clicked, you can access the element that was clicked with event.currentTarget
      console.log( "Search for " + $("#search_input").val() );

      var result_view = new ResultView({ el: $("#container") })
    }
});