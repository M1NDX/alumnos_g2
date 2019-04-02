import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrls: ['./alumno-edit.component.css']
})
export class AlumnoEditComponent implements OnInit {

  modoAdd = true;
  id: number;
  alumno: Alumno;
  
  carreras = ['ISC', 'ISI', 'IE', 'IES'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
           if (params.id) {
             this.modoAdd = false;
             this.id = params.id;
           } else {
             this.modoAdd = true;
             this.alumno = new Alumno(this.alumnoService.getNextId(),'',20,60,'ISI','M');
           }
        }
      );

  }

  save(formulario: NgForm) {
    // console.log(formulario);
    // console.log(formulario.value);
    // console.log(formulario.controls.nombre.value);
    this.alumnoService.addAlumno(this.alumno);
    this.router.navigate(['../'], {relativeTo: this.route});

  }

  calificacionValida(): boolean {
    return this.alumno.calificacion>=50 && this.alumno.calificacion <=100;
  }

}
