import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html'
})

export class CustomersComponent implements OnInit {
    customers =[
        {id: 1, name: 'Mickey'},
        {id: 2, name: 'Minnie'},
        {id: 3, name: 'Goofy'},
        {id: 4, name: 'Daffy'},
        {id: 5, name: 'Donald'},
    ];

    constructor() { }

    ngOnInit() { }
}
