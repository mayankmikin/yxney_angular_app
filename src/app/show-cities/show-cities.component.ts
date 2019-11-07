import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { City } from '../model/city';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-cities',
  templateUrl: './show-cities.component.html',
  styleUrls: ['./show-cities.component.scss']
})
export class ShowCitiesComponent implements OnInit {

  constructor(private citiservice:CitiesService) { }

  ngOnInit() {
    this.loadCities();
  }

  cities:City[]=[];
  displayedColumns: string[] = ['id', 'name', 'population'];

  loadCities()
  {
    this.citiservice.loadCities()
    .subscribe(data =>
      {
          if(data)
          {
            this.cities=data;
          }
          else
          {
            console.log('could not get the data from api');
          }
    });
  }


}
