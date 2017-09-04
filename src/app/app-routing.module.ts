import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { CvComponent } from "./components/cv/cv.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [

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
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
