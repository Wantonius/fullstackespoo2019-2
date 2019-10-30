const express = require("express");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/apiroutes");

let app = express();


//User databases

const registeredUsers = []
const loggedUsers = []

//Middlewares

app.use(bodyParser.json());

createToken = () => {
	let token = ""
	let letters = "abcdefghijABCDEFGIHJ0123456789"
	for(let i=0;i<512;i++) {
		let temp = Math.floor(Math.random()*30)
		token = token + letters[temp]
	}
	return token;
}

isUserLogged = (req,res,next) => {
	let token = req.headers.token;
	if(!token) {
		return res.status(403).json({message:"forbidden"});
	}
	for(let i=0;i<loggedUsers.length;i++) {
		if(token === loggedUsers[i].token) {
			req.session = {}
			req.session.user = loggedUsers[i].user
			return next();
		}
	}
	return res.status(403).json({message:"forbidden"});
}

// LOGIN API

app.post("/register",function(req,res) {
	if(!req.body) {
		return res.status(422).json({message:"Please provide proper credentials"});
	}
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({message:"Please provide proper credentials"});		
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({message:"Please provide proper credentials"});	
	}
	let user = {
		username:req.body.username,
		password:req.body.password
	}
	for(let i=0;i<registeredUsers.length;i++) {
		if(user.username === registeredUsers[i].username) {
			return res.status(409).json({message:"Username already in use"});
		}	
	}
	registeredUsers.push(user);
	console.log(registeredUsers);
	return res.status(200).json({message:"Register success!"});
})

app.post("/login",function(req,res) {
	if(!req.body) {
		return res.status(422).json({message:"Please provide proper credentials"});
	}
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({message:"Please provide proper credentials"});		
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({message:"Please provide proper credentials"});	
	}
	let user = {
		username:req.body.username,
		password:req.body.password
	}
	for(let i=0;i<registeredUsers.length;i++) {
		if(user.username === registeredUsers[i].username) {
			if(user.password === registeredUsers[i].password) {
				//Create token
				let token = createToken();
				loggedUsers.push({
					user:user.username,
					token:token
				})
				return res.status(200).json({token:token})
			}
		}
	}
	return res.status(403).json({message:"Username or password not correct"})
})

app.post("/logout",function(req,res) {
	let token = req.headers.token;
	if(!token) {
		return res.status(404).json({message:"not found"});
	}
	for(let i=0;i<loggedUsers.length;i++) {
		if(loggedUsers.token === token) {
			loggedUsers.splice(i,1);
			return res.status(200).json({message:"logged out"});
		}
	}
	return res.status(404).json({message:"not found"});
})

app.use("/api",isUserLogged,apiroutes);

app.listen(3001);

console.log("Running in port 3001");