import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../alumnos.service';
import { Subscription } from 'rxjs';
import { Alumno } from '../Alumno';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  alumnos: Alumno[];
  subscript: Subscription;


  constructor(private alumnoService: AlumnosService,
    private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
      this.alumnos= this.alumnoService.getAlumnos();
      this.subscript = this.alumnoService.cambiaDato
      .subscribe(
        (arregloAlumnos: Alumno[]) => {
          this.alumnos = arregloAlumnos;
        }
      );

  }

  editar(alumno){
    console.log(`El alumno a editar id: ${alumno.id} nombre: ${alumno.nombre}`);
    this.router.navigate([alumno.id, 'edit'], {relativeTo: this.route});
  }

  borrar(id: number) {
    this.alumnoService.borrarAlumno(id);
    //this.alumnos= this.alumnoService.getAlumnos();
 
  }

  crearAlumno() {
    //this.router.navigate(['alumnos/new']);
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
