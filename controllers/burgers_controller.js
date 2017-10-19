var express = require("express");

var router = express.Router();
var db = require("../models");
// Import the model (burger.js) to use its database functions.


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    db.Customer.findAll({}).then(function(customers){
      var c = customers;
       db.Burger.findAll({order:[["burger_name", "ASC"]]}).then(function(burgers){
        res.render("index", {burgers:burgers});
        });
    });
   
});

router.post("/", function(req, res) {

  db.Burger.create({
      burger_name:req.body.burger_name,
      devoured:false
  }).then(function(burger){
    res.redirect("/");
  });
  
});

router.put("/:id", function(req, res) {
  
  var customer_name = req.body.customer_name;
  db.Burger.findOne({
    where:{
      id:req.params.id
    }
  }).then(function(burger){
    var b = burger;
    db.Customer.create({
      customer_name:customer_name,
      BurgerId: burger.id
    }).then(function(customer){
      b.update({
        devoured:true,
        customer_name: customer.customer_name
      }, {fields:["devoured", "customer_name"]}).then(function(){
        res.redirect("/");
      });
    });
    
  });
  
});


// Export routes for server.js to use.
module.exports = router;
