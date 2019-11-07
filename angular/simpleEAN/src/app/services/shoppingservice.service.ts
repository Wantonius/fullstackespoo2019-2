import {Injectable} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {BackendMessage} from '../models/backendmessage.model';

@Injectable()
export class ShoppingService {
	
	constructor(private _http:HttpClient) {}
	
	getList() {
		const options = {
			headers: new HttpHeaders({
			"Content-Type":"application/json"
		})
		}
		return this._http.get<ShoppingItem[]>("/api/shopping",options);
	}
	
	addToList(shoppingitem:ShoppingItem) {
		const options = {
			headers: new HttpHeaders({
			"Content-Type":"application/json"
		})
		}
		return this._http.post<BackendMessage>("/api/shopping",shoppingitem,options);
	}
	
	removeFromList(id:number) {
		const options = {
			headers: new HttpHeaders({
			"Content-Type":"application/json"
		})
		}		
		return this._http.delete<BackendMessage>("/api/shopping/"+id,options);
	}
}