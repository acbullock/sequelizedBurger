var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override various requests..
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync({force:true}).then(function(){
	db.Burger.create({
		burger_name:"Cheeseburger",
		devoured:false
	});
	db.Burger.create({
		burger_name:"Hamburger",
		devoured:false
	});
	db.Burger.create({
		burger_name:"Double Cheeseburger",
		devoured:false
	});
	db.Burger.create({
		burger_name:"Bacon Cheeseburger",
		devoured:false
	});
	db.Burger.create({
		burger_name:"Veggie Burger",
		devoured:false
	});




	app.listen(port);
});




