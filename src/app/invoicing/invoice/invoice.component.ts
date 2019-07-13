import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceSummary } from '../model/item';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  invoiceSummary: InvoiceSummary;
  allCustomers: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.invoice = {
      saleDate: new Date(),
      items: []
    }

    this.invoiceSummary = this.recalculateSummery(this.invoice);
    this.allCustomers = this.customerService.getAllCustomers();
  }

  recalculateSummery(invoice: Invoice): InvoiceSummary {
    const brutto = invoice.items.map(i => i.brutto).reduce((sum, i) => sum + i, 0);
    const netto = invoice.items.map(i => i.netto).reduce((sum, i) => sum + i, 0);

    return {
      brutto: brutto,
      netto: netto,
      tax: this.round(brutto - netto, 2)
    }
  }

  private round(price: number, digits: number): number {
    const rounded = Number((Math.round(price * 100) / 100).toFixed(digits));
    return rounded;
}

  updateItems(items) {
    this.invoiceSummary = this.recalculateSummery(this.invoice);
  }

}
