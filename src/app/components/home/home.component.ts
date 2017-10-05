import { Component, OnInit } from '@angular/core';
import { cabeceraInicio } from "./datosHome";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cabecera :any []= cabeceraInicio;

  constructor() { }

  ngOnInit() {
  }

}
