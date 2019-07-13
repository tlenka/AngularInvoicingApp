import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    CustomerComponent,
  //  CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
