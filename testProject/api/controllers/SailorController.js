/**
 * SailorController
 *
 * @description :: Server-side logic for managing sailors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSailors: function(req, resp, next){
			//console.log("username::"+req.body.username);
			//console.log("password::"+req.body.password);

	      Sailor.query({name:req.body.username, password: req.body.password}, function(err, User) {
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

