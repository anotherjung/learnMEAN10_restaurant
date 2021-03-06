//MVC2 controller
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
	getorders: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])	

		//before assocation
		// Order.find({}, function(err, output) {
		// 	if(err) {
		// 		console.log('err con getorders', err);
		// 	} else {
		// 		res.json(output);
		// 	}
		// })

		//after assocation
		 Order.find({})
		 .populate('menu')
		 .populate('_customer')
		 .exec(function(err, results) {
		 	if(err) {
		 		console.log('con getorders',err)
		 	} else {
		 		res.json(results);
		 	}
		 })


	},

	addorder: function(req, res) {
		var cc = new Order(
			{name:req.body.name, 
				type:req.body.type, 
				total:req.body.total,
				menu: req.body.menu, 
				_customer: req.body._customer, 
				created:Date.now()}
			);
		cc.save(function(err) {
			if(err) {
				console.log('err con addorder', err);
			} else {
				res.redirect('/');
			}
		})
	},

	deleteorder: function(req, res) {
			Order.remove({_id:req.body._id}, function(err, output) {
			if(err){
				console.log('err con deleteorder', err )
			} else {
				console.log('baby con deleteorder', output)
			}
		})
	},

	getthisorder: function(req, res) {
		Order.findOne({_id:req.query._id}, function(err, output) {
			if(err) {
				console.log('err con getthisorder', err);
			} else {
				res.json(output);
				console.log('baby con getthisorder', output);
			}
		})
	},

	editthisorder: function(req, res) {
		console.log('con editthisorder22', req.body)
		Order.update({_id:req.body._id}, {name:req.body.name, type:req.body.type, total:req.body.total}, function(err, output) {
			if(err) {
				console.log('err con editthisorder',err);
			} else {
				res.json(output);
				console.log('con editthisorder', output);
			}
		})
	}


//ends module export
}