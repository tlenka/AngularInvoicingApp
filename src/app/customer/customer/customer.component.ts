import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerModel } from '../customer-model';
import { CUSTOMERS } from '../customer-data';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newCustomer); }

  //public name: string;
  allCustomers: CustomerModel[];

  @Input()
  private newCustomer: CustomerModel = new CustomerModel();
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.setAllCustomers();
    
  }

  setAllCustomers(): void {
    this.allCustomers = this.customerService.getAllCustomers();
  }

  saveCustomer(customer: CustomerModel): void {
    //this.newCustomer = new CustomerModel(this.newCustomer.name);
    this.customerService.addCustomerToArray(customer);
    alert(customer.name);
  }

}
