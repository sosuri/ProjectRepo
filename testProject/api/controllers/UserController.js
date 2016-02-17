/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var inspect = require('eyespect').inspector();
module.exports = {
	findUser: function(req, resp, next){
		  console.log("inside find...")
			//console.log("username::"+req.body.username);
			//console.log("password::"+req.body.password);

	      User.findOne({name:req.body.username, password: req.body.password}, function(err, User) {
				if(err){
				resp.send({"message":"error while retrieving data"})
				}
				else{
				console.log("No error...");
				resp.set('Content-Type', 'application/json');
				inspect(User, 'user')
				return resp.send(User);
				}
	
		});
	}
	
};

