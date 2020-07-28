import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-covid-cases',
  templateUrl: './covid-cases.component.html',
  styleUrls: ['./covid-cases.component.css']
})
export class CovidCasesComponent implements OnInit {
  covidInfo: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getCovidInfo();
  }

  getCovidInfo(){
    this.apiService.getCovidInfo().subscribe(dados => this.covidInfo = dados);
  }
}
