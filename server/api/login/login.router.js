'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
//var Story = require('./story.model');
var User = require('../users/user.model')


router.post('/', function(req,res,next){
	console.log('woot',req.body)
	User.findOne({
		where: {
			email:req.body.email,
			password: req.body.password
		}
	})
	.then(function(user){
		console.log(user)
		if(!user){

			res.sendStatus(401);
		}else{
			console.log("SUCCESSS")
			req.session.userId = user.id;
			console.log(res)
			res.send("SUCCESSS");
		}
	}).catch(next);
})


module.exports =  router;