import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobremiComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    MenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
