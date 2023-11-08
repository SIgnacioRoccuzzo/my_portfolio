import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
