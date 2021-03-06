import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Conditional} from './conditional.component'
import { Datalist} from './datalist.component'

@NgModule({
  declarations: [
    AppComponent,
	Conditional,
	Datalist
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
