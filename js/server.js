var express = require('express');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var cors= require('cors');

var app=express();
var mongoDB = "mongodb://localhost:27017/mydb";
var accountSchema = new mongoose.Schema({
	account: {type: String,unique:true},
	password: String
});
var account=mongoose.model('account',accountSchema);

function module_account(){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(cors());
	mongoose.connect(mongoDB);

	app.get('/api/account',function(req,res,next){
		account.find({},function(err,docs){
			console.log("Connected");
			if(err){
				res.send(err);
			}
			else{
				console.log(docs);
			}
			res.json(docs);
			next();
		});
	});

	app.post('/api/addaccount',function(req,res,next){
		console.log(req.body);
		account.create(req.body,function(err,account){
			if(err){
				res.send(err);
			}
			else{
				res.json(account);
			}
			next();
		})
	})

	app.post('/api/login',function(req,res){
		console.log(req.body);
		account.findOne({account:req.body.account},function(err,user){
			if(err){res.status(500).send('Unable to connect')}
			if(!user){res.status(404).send('User not found')}
			if(req.body.password === user.password){
				res.status(200).json({account:user.account})
			}
			else{
				res.status(404).send('password does not match');
			}
		})
	})


	app.listen(3000,function(){
		console.log("Server listening on",3000)
	})
	}

	module.exports = module_account;
