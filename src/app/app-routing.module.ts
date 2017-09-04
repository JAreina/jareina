import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { CvComponent } from "./components/cv/cv.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: CvComponent,
    
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
