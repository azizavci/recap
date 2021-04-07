import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  apiURL="https://localhost:44305/api/colors/getall";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<ColorResponseModel>(this.apiURL).subscribe(response=>{
      this.colors=response.data;
    });
  }

}
