import {Component} from '@angular/core'
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';
import {Router} from '@angular/router';

@Component({
	selector:"shoppingform",
	templateUrl:"./shoppingform.component.html"
})
export class ShoppingForm {	
	shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	
	constructor(private _shopping:ShoppingService, private _router:Router) {}

	addToList() {
		this._shopping.addToList(this.shoppingitem).subscribe(
			data => this._router.navigate(["/list"]),
			error => console.log(error),
			() => console.log("Add to list done!")
		);
		this.shoppingitem = new ShoppingItem("",0,0,0);
	}
	
}