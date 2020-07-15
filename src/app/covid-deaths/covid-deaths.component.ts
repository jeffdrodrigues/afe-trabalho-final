import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-covid-deaths',
  templateUrl: './covid-deaths.component.html',
  styleUrls: ['./covid-deaths.component.css']
})
export class CovidDeathsComponent implements OnInit {
  covidInfo: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getCovidInfo();
  }

  getCovidInfo(){
    this.apiService.getCovidInfo().subscribe(dados => this.covidInfo = dados);
  }
}
