/**
* Sailor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	  user: {type:'string',unique: true, required: true},
      pass: {type:'string', required: true}
  }
};

