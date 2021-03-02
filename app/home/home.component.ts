import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { GlobalDataSummary } from '../countries/models/global-Data';
import { DataSeviceService } from "../services/data-sevice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0
  totalActive = 0
  totalDeaths = 0
  totalRecovered = 0
  globalData:GlobalDataSummary[]
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  }
  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart'
  }
  chartData = []

  constructor(private dataService: DataSeviceService) { } 

  updateChart(input: HTMLInputElement) {
    this.initChart(input.value)
  }

  initChart(caseType: string) {
    this.chartData = []
    this.chartData.push(['Country', 'Cases'])
    this.globalData.forEach(cs => {
      let value :number ;
      if (caseType == 'c')
        if (cs.confirmed > 2000)
          value = cs.confirmed
          
      if (caseType == 'a')
        if (cs.active > 2000)
          value = cs.active
      if (caseType == 'd')
        if (cs.deaths > 1000)
          value = cs.deaths
          
      if (caseType == 'r')
        if (cs.recovered > 2000)
            value = cs.recovered
        

        this.chartData.push([cs.country, value])
    })
    
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: this.chartData,
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: this.chartData,
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
  }
  
  ngOnInit(): void {
    this.dataService.getGlobalData()
    .subscribe(
      {
        next: (result) => {
          this.globalData = result
          result.forEach(cs => {
            if(!Number.isNaN(cs.active)) {
              this.totalActive += cs.active
              this.totalConfirmed += cs.confirmed
              this.totalDeaths += cs.deaths
              this.totalRecovered += cs.recovered
            }
          })
          this.initChart('c')
          }
        })
        
  }
}
