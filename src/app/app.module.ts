import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { CovidDeathsComponent } from './covid-deaths/covid-deaths.component';
import { CovidRecoveredComponent } from './covid-recovered/covid-recovered.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidCasesComponent,
    CovidDeathsComponent,
    CovidRecoveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
