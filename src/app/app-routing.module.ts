import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosMainComponent } from './alumnos-main/alumnos-main.component';
import { AlumnosListaComponent } from './alumnos-main/alumnos-lista/alumnos-lista.component';
import { AlumnoEditComponent } from './alumnos-main/alumno-edit/alumno-edit.component';
import { AlumnoDetalleComponent } from './alumnos-main/alumno-detalle/alumno-detalle.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoEditComponent } from './grupos/grupo-edit/grupo-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'alumnos', component: AlumnosMainComponent, children: [
      { path: '', component: AlumnosListaComponent },
      { path: 'new', component: AlumnoEditComponent },
      { path: ':id', component: AlumnoDetalleComponent },
      { path: ':id/edit', component: AlumnoEditComponent, canActivate: [] },
    ]
  },
  {
    path: 'grupos', component: GruposComponent, children: [
      //{path: '', component: AlumnosListaComponent},
      { path: 'new', component: GrupoEditComponent },
      //{ path: ':id', component: AlumnoDetalleComponent },
      //{ path: ':id/edit', component: AlumnoEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
