import { Component } from '@angular/core';

// import { CustomerService } from'./customer/customer.service';

// converted to a barrel
import { CustomerComponent, CustomerService } from './customer/index';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers:    [CustomerService],  
})
export class AppComponent  {
   
  // [] means property binding : Component to DOM
  // () means event binding: DOM to Component

  title = 'Angular Playground'
  name = 'Stranger'; 
  color ='blue';
  
  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }
}
