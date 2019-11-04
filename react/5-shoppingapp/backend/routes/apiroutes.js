let express = require("express");
let mongoose = require("mongoose");
let ShoppingItemModel = require("../models/shoppingitem");

let router = express.Router();


//Shopping API

router.get("/shopping", function(req,res) {
	let query = {"user":req.session.user}
	if(req.query.type) {
		query = {"user":req.session.user,
				 "type":req.query.type}
	}
	ShoppingItemModel.find(query,{"type":1,"count":1,"price":1}, function(err,items) {
		if(err) {
			return res.status(200).json([]);
		}
		if(!items) {
			return res.status(200).json([]);
		}
		return res.status(200).json(items);
	})
});

router.post("/shopping", function(req,res) {
	let item = new ShoppingItemModel({
		type:req.body.type,
		count:req.body.count,
		price:req.body.price,
		user:req.session.user
	})
	item.save(function(err,item) {
		if(err) {
			console.log("Failed to save shopping item:"+err);
			return res.status(409).json({message:"not saved"})
		}
		if(!item) {
			return res.status(409).json({message:"not saved"})
		}	
		return res.status(200).json({message:"success"});
	})	
});

router.delete("/shopping/:id",function(req,res) {
	let id = req.params.id;
	ShoppingItemModel.findById(id, function(err,item) {
		if(err) {
			console.log("Failed to find item to delete. Error:",err)
			return res.status(404).json({message:"not found"})
		}
		if(!item) {
			return res.status(404).json({message:"not found"})
		}
		if(item.user === req.session.user) {
			ShoppingItemModel.deleteOne({"_id":item._id},function(err) {
				if(err) {
					console.log("Failed to delete. Error:",err)
					return res.status(409).json({message:"conflict"})
				}
				return res.status(200).json({message:"success"})
			})
		} else {
			return res.status(409).json({message:"conflict"})
		}
	})
})

router.put("/shopping/:id", function(req,res) {
	ShoppingItemModel.findById(req.params.id, function(err,item) {
		if(err) {
			return res.status(404).json({message:"not found"})	
		}
		if(!item) {
			return res.status(404).json({message:"not found"})
		}
		if(item.user === req.session.user) {
			ShoppingItemModel.replaceOne({"_id":req.params.id},{
				type:req.body.type,
				price:req.body.price,
				count:req.body.count,
				user:req.session.user
			}, function(err) {
				if(err) {
					console.log("Failed to replace item:",err);
					return res.status(409).json({message:"conflict"})
				}
				return res.status(200).json({message:"success"})
			})
		} else {
			return res.status(409).json({message:"conflict"})
		}
	})
})

module.exports = router;