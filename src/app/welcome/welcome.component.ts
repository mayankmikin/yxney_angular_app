import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private welcomeservice:WelcomeService) { }

  ngOnInit() {
    this.loadCities();
  }

  welcomelist:any[]=[];
  displayedColumns: string[] = ['value'];

  loadCities()
  {
    this.welcomeservice.loadWelcome()
    .subscribe(data =>
      {
          if(data)
          {
            this.welcomelist=data;
          }
          else
          {
            console.log('could not get the data from api');
          }
    });
  }

}
