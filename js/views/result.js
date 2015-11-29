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
});