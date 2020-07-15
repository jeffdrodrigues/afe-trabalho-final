import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-covid-recovered',
  templateUrl: './covid-recovered.component.html',
  styleUrls: ['./covid-recovered.component.css']
})
export class CovidRecoveredComponent implements OnInit {
  covidInfo: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getCovidInfo();
  }

  getCovidInfo(){
    this.apiService.getCovidInfo().subscribe(dados => this.covidInfo = dados);
  }
}
