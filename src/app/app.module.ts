// APP.MODULE.TS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlumnosMainComponent } from './alumnos-main/alumnos-main.component';
import { AlumnoComponent } from './alumnos-main/alumnos-lista/alumno/alumno.component';
import { AlumnosListaComponent } from './alumnos-main/alumnos-lista/alumnos-lista.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlumnoEditComponent } from './alumnos-main/alumno-edit/alumno-edit.component';
import { AlumnoDetalleComponent } from './alumnos-main/alumno-detalle/alumno-detalle.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnosListaComponent,
    AlumnosMainComponent,
    HeaderComponent,
    HomeComponent,
    AlumnoEditComponent,
    AlumnoDetalleComponent,
    GruposComponent,
    GrupoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
