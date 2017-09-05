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
    path: 'proyectos/nasa',
    component: ProyectosComponent,
   
  },
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
