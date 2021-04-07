import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {

  apiURL = 'https://localhost:44305/api/brands/getall';
  constructor(private httpClient: HttpClient) {}

  brands: Brand[] = [];

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.httpClient
      .get<BrandResponseModel>(this.apiURL)
      .subscribe((response) => {
        this.brands=response.data;
      });
  }
}
