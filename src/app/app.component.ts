import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  
  // [] means property binding : Component to DOM
  // () means event binding: DOM to Component

  name = 'Angular'; 
  something ='some';
  color ='blue';

  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }
}
