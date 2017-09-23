import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CvComponent } from './components/cv/cv.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { GoogleAnalyticsService } from "./service/google-analytics.service";
import { SliderComponent } from "./components/home/slider/slider.component";



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    CvComponent,
    ProyectosComponent,
    HomeComponent,
    ProyectoComponent,
    SliderComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
