import {Component} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:"shoppinglist",
	templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList {
	
	shoppinglist:ShoppingItem[] = [];
	shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	
	constructor(private _shopping:ShoppingService) {}

	getList() {
		this.shoppinglist = this._shopping.getList();
	}
	
	addToList() {
		this._shopping.addToList(this.shoppingitem);
		this.shoppingitem = new ShoppingItem("",0,0,0);
		this.getList();
	}
	
	removeFromList(idx) {
		this._shopping.removeFromList(idx);
		this.getList();
	}
}