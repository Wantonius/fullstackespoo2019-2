import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingForm} from './components/shoppingform.component';

import {ShoppingService} from './services/shoppingservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	ShoppingList,
	ShoppingForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	NgbModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
