import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
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
