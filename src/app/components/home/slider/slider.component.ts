import { Component, OnInit } from "@angular/core";
import { datosSlider } from "./datos-slider";
@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  titulo:string="Conocimientos en tecnologías web"
  url: string;
  fondo: string;
  datosSlider: any = datosSlider;
  totalIds: number = 8;
  idActual: number;
  finInterval: any;
  conocimientos: any[];

  constructor() {
    //window.setTimeout(()=> //this.cambiarUrlBackground(),1000);
    this.slider();
  }

  ngOnInit() {}

  slider() {
    this.finInterval = setInterval(() => {
      
      let num=0;

      if(num ===this.idActual){
      this.idActual = Math.floor(Math.random() * this.totalIds);
       num = this.idActual;
      }else{
        this.idActual = Math.floor(Math.random() * this.totalIds);
      }
      
        this.url = datosSlider[this.idActual].urlLogo;
        
              this.fondo = `url( ${this.url})`;
        
              for (let i = 0; i < datosSlider.length; i++) {
                this.conocimientos = [];
                this.conocimientos.push(datosSlider[this.idActual]);
              }
     
     
    }, 3000);
  }

  pararIntervalo() {
    clearInterval(this.finInterval);
  }
  reanudarIntervalor() {
    this.slider();
  }
}
