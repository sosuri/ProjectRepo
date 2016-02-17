/**
 * SailsController
 *
 * @description :: Server-side logic for managing sails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var inspect = require('eyespect').inspector();
var log = require('captains-log')();
var aop = require('meld');
var async = require('async');

module.exports = {

	getSailors: function(req, resp, next){
			/*Sails.query('SELECT sails.username AS username, sails.password AS passwords, sails.id AS id, s.user AS users, s.pass AS pass FROM sails sails INNER JOIN sailor s ON (sails.username = s.user)', 
						function(err, results) {
						console.log("After execution of query....")
							if (err) 
							{
							return resp.serverError(err);
							}
							else{
							console.log("In the middle of selection....")
							inspect(results, 'results');
							return resp.send(results);
							}
						});
						*/
			log.debug("captains logging...");			
			console.log("here i am ....");
			console.log("on the road again....");
			console.log("here i go...");
			console.log("upon the stage....");
			console.log("here i goooo....");
			console.log("playing the star again....");
			
			var cars = ["Saab", "Volvo", "BMW"];

			
			async.each(cars, function(car, callback) {
			
			  console.log('Processing car ' + car);
			  callback(true);
			
			}, function(err){
			if(err){
			log.debug("error while making aync each call...");
			}
			else{
			log.debug("successfully processed...");
			}
			});
			
			
			var names = ["michael","richard","john","jennifer","ben","julie"];
			async.map(names, getInfo, function (err, result) {
			  if(!err) {
				console.log('Finished: ' + result);
			  } else {
				console.log('Error: ' + err);
			  }

			});

			function getInfo(name, callback) {
			  setTimeout(function() {
				callback(null, name.toUpperCase());
			  }, 1000);
			}
			
			
			return resp.send("API call successfully over...")

						
			}


				
};
	aop.afterReturning(module.exports, 'getSailors', function(x) {
			console.log("selection process over afterReturning...");
		});	
		
	aop.after(module.exports, 'getSailors', function(x) {
			console.log("selection process over after...");
		});	
		
	aop.before(module.exports, 'getSailors', function(x) {
			console.log("check if the user has been logged in...");
		});
		
	


