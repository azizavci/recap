import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  apiURL = 'https://localhost:44305/api/customers/getall';
  customers: Customer[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.httpClient
      .get<CustomerResponseModel>(this.apiURL)
      .subscribe((response) => {
        this.customers = response.data;
      });
  }
}
