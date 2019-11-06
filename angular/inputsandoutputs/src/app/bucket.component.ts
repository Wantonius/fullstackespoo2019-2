import {Component} from '@angular/core';

@Component({
	selector:"bucket",
	templateUrl:"./bucket.component.html"
})
export class Bucket {
	message:string = ""

	receiveMessage(value:string) {
		this.message = value+" apple says Hello";
	}
}