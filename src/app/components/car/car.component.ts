import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  apiURL = 'https://localhost:44305/api/cars/getCarDetails';
  cars: Car[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpClient.get<CarResponseModel>(this.apiURL).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
