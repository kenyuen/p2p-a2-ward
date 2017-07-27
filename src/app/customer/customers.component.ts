import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService} from './customer.service';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
    providers:    [CustomerService],
})

export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {  }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}
