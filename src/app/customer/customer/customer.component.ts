import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerModel } from '../customer-model';
import { COUNTRIES } from '../countries-array';

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
  countries: String[];

  @Input()
  private newCustomer: CustomerModel = new CustomerModel();
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.setAllCustomers();
    this.countries = COUNTRIES;
    
  }

  setAllCustomers(): void {
    this.allCustomers = this.customerService.getAllCustomers();
  }

  saveCustomer(customer: CustomerModel): void {
    this.newCustomer = new CustomerModel();
    this.customerService.addCustomerToArray(customer);
    alert(customer.name);
  }

}
