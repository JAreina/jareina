import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { CvComponent } from "./components/cv/cv.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'cv',
    component: CvComponent,
    
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
