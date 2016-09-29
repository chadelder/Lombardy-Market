var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Handle route for mongo Schema
Order = require('./models/order');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/thestore');
var db = mongoose.connection;

//Landing Page
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Get Orders (s))
app.get('/api/orders', function(req, res) {
  Order.getOrders(function(err, orders) {
    if(err) {
      throw err;
    }
    //console.log(orders)
    res.json(orders);
  });
});

//Get Order(s) by Id
app.get('/api/orders/:_id', function(req, res){
	Order.getOrderById(req.params._id, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

// Post an order
app.post('/api/orders', function(req, res){
	var order = req.body;
	Order.addOrder(order, function(err, order){
		if(err){
			throw err;
		}
    console.log(order)
		res.json(order);
	});
});

// Put
app.put('/api/orders/:_id', function(req, res){
	var id = req.params._id;
	var order = req.body;
	Order.updateOrder(id, order, {}, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

// Delete Order
app.delete('/api/orders/:_id', function(req, res){
	var id = req.params._id;
	Order.removeOrder(id, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.listen(3000);
console.log('Running on port 3000...WEIRDO'
);
