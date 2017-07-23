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
  customers =[
    {id: 1, name: 'Mickey'},
    {id: 2, name: 'Minnie'},
    {id: 3, name: 'Goofy'},
    {id: 4, name: 'Daffy'},
    {id: 5, name: 'Donald'},
  ];

  changeColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }
}
