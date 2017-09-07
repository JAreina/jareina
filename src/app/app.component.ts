import { Component, Input } from '@angular/core';
import { BackgroundColorRandomComponent } from "./util/background-color-random.component";
import {DomSanitizer} from '@angular/platform-browser';
import { ProyectoComponent } from "./components/proyectos/proyecto/proyecto.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BackgroundColorRandomComponent,
                  ProyectoComponent]
})
export class AppComponent {
  title:string = 'JAreina';
 

  constructor(public bcrc : BackgroundColorRandomComponent,
                    private satinizer : DomSanitizer,
                    public proyecto:ProyectoComponent) {
          
                      this.seguridadUrl();
  }
 

  //seguridad de la url de cada proyecto.component iframe
  seguridadUrl(){
    for (let i =0 ; i<this.proyecto.datos.length;i++){
     // console.log(this.proyecto.datos[i].pageProyecto)


      if( this.proyecto.datos[i].pageProyecto){
             this.proyecto.urlPage=this.satinizer.bypassSecurityTrustResourceUrl( this.proyecto.datos[i].pageProyecto);
             this.proyecto.datos[i].pageProyecto = this.proyecto.urlPage;
      }
      if( this.proyecto.datos[i].urlVideo){
        this.proyecto.urlPage=this.satinizer.bypassSecurityTrustResourceUrl( this.proyecto.datos[i].urlVideo);
        this.proyecto.datos[i].urlVideo = this.proyecto.urlPage;
 }
      //console.log(this.proyecto.urlPage)
    
    }
   }

}
