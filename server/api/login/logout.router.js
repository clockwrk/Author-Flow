'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
//var Story = require('./story.model');
var User = require('../users/user.model')



router.delete('/logout', function(req,res,next) {
	req.session.destroy()
	res.send("removed")
})

module.exports = router;