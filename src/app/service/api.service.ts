import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  apiUrl = 'https://disease.sh/v3/covid-19/all?yesterday=false&allowNull=false';

  constructor(private http: HttpClient) { }

  getCovidInfo(){
    return this.http.get(this.apiUrl);
  }  
}
