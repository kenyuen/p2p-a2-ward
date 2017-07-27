import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            {id: 1, name: 'Mickey'},
            {id: 2, name: 'Minnie'},
            {id: 3, name: 'Goofy'},
            {id: 4, name: 'Daffy'},
            {id: 5, name: 'Donald'},
        ];

    }

}
