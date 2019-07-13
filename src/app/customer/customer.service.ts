import { Injectable } from '@angular/core';
// import { CustomerComponent } from './customer/customer.component';
import { CUSTOMERS } from './customer-data';
import { CustomerModel } from './customer-model';

@Injectable()
export class CustomerService {

    constructor() { }
 
  getAllCustomers(): CustomerModel[] {
    return CUSTOMERS;
  }

  addCustomerToArray(customer: CustomerModel): void {
    customer.dateCreated = new Date();
    CUSTOMERS.push(customer);
  }

    
}