import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    NavbarComponent,
    CountriesComponent,
    HomeComponent,
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'countries', component: CountriesComponent },
    ]),
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
