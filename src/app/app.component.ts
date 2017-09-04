import { Component, Input } from '@angular/core';
import { BackgroundColorRandomComponent } from "./util/background-color-random.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BackgroundColorRandomComponent]
})
export class AppComponent {
  title:string = 'JAreina';
 

  constructor(private bcrc : BackgroundColorRandomComponent){

              
           
  }
 
 

}
