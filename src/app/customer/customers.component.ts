import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService} from './customer.service';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
})

export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService) {  }

    ngOnInit() {
        // Rx observeable version array with rxObservable
        this._customerService.getCustomers_RxObservable()
            .subscribe(
                // worked
                (customers) => this.customers = customers,
                // errored
                (err) => { console.log(err); }
            );

        // straight up promise to array
/*         this._customerService.getCustomers()
            .then((customers) => this.customers = customers)
            .catch((err) => {
                console.log(err);
            });
 */
        // Promise<any>
/*         this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err);
            });
 */            
        // Rx Observable Version
/*         this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err);
                return Observable.of(true); // eats the error
            });
 */    }
}
