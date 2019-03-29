import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../Alumno';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Input() alumno: Alumno;
  @Output() editAlumno = new EventEmitter(); // de '@angular/core'
  @Output() deleteAlumno = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  borrarAlumno() {
    this.deleteAlumno.emit(this.alumno.id);
    //console.log('se borrará ' + this.alumno.nombre);
  }

  editarAlumno() {
  // emitir mensaje al componente padre
    this.editAlumno.emit(this.alumno);
  }
}
