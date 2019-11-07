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
		this._shopping.getList().subscribe(
			data => this.shoppinglist = data,
			error => console.log(error),
			() => console.log("Get shoppinglist done!")
		);
	}
	
	removeFromList(idx) {
		let id = this.shoppinglist[idx].id
		this._shopping.removeFromList(id).subscribe(
			data => this.getList(),
			error => console.log(error),
			() => console.log("Remove item from list done!")
		)		
	}
}