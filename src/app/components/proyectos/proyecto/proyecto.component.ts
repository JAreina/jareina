import { Component, OnInit } from '@angular/core';
import {logoAngular,datosProyectos} from '../../../datos/datosProyectos'


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
  
})
export class ProyectoComponent  {
logo :any= logoAngular;
datos:any[]=datosProyectos;
urlPage :any;

               
   }




