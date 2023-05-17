import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  public countries: string[] = [
    'UK',
    'US',
    'Canada'
  ]

  visaInfo: any = {};
  constructor(private appService:AppService){

  }

  public onChange(event:any): void {

    console.log(event.value);
    this.appService.getVisaInfo(event.value)
    .subscribe({
      next: (response) => {
        console.log(response);

        this.visaInfo = response;
        
      },
      error(err){
        console.log(err);
        
      }
    })

  }
}
