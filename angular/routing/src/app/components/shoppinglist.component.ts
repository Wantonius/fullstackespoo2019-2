import {Component, OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:"shoppinglist",
	templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit {
	
	
	shoppinglist:ShoppingItem[] = []
	constructor(private _shopping:ShoppingService) {}

	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.shoppinglist = this._shopping.getList();
	}
	
	removeFromList(idx) {
		this._shopping.removeFromList(idx);
		this.getList();
	}
}