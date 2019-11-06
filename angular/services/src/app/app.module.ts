import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ShoppingService} from './services/shoppingservice.service';
import {ShoppingList} from './components/shoppinglist.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	ShoppingList
  ],
  imports: [
    BrowserModule,
	FormsModule,
	NgbModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
