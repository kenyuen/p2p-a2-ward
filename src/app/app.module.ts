import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerComponent } from "./customer/customer.component";
import { CustomersComponent } from "./customer/customers.component";

import 'rxjs/Rx';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [  ]
})
export class AppModule { }
