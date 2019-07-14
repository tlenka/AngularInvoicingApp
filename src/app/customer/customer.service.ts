import { Injectable } from '@angular/core';
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

  IsCustomerNameExist(newCustomerName: String): boolean{
    let exist: boolean;
    CUSTOMERS.forEach(function (customer) {
     
      if(newCustomerName == customer.name){
        exist = true;
      }
      else{
        exist = false;
      }
    });
    return exist;
  }

  IsCustomerNipExist(newCustomerNip: String): boolean{
    let exist: boolean;
    CUSTOMERS.forEach(function (customer) {
     
      if(newCustomerNip == customer.nip){
        exist = true;
      }
      else{
        exist = false;
      }
    });
    return exist;
  }
}