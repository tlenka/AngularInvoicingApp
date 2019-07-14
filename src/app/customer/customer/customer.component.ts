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

  allCustomers: CustomerModel[];
  countries: String[];
  
  customerNipPattern = "[0-9]{10}"; 
  customerPostCodePattern = "[0-9]{2}-[0-9]{3}"

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
    if(this.customerService.IsCustomerNameExist(customer.name)){
      alert("It's looking this name is exist.");
    }
    else if(this.customerService.IsCustomerNipExist(customer.nip)){
      alert("It's looking this nip is exist.");
    }
    else{
      this.newCustomer = new CustomerModel();
      this.customerService.addCustomerToArray(customer);
      alert("Customer: "+ customer.name + " was succesfully added.")
    }
  }

}
