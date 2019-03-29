import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Alumno } from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  cambiaDato = new Subject<Alumno[]>();

  private alumnos: Alumno[] = [
    new Alumno(1, 'Alberto', 23, 80, 'ISC', 'M'),
    new Alumno(2, 'Laura', 23, 86, 'ISC', 'F'),
    new Alumno(3, 'Jaime', 23, 58, 'ISC', 'M'),
  ];

  constructor() { }

  getAlumnos(): Alumno[] {
    return this.alumnos.slice();
  }

  private notificarCambios() {
    this.cambiaDato.next(this.alumnos.slice());
  }

  borrarAlumno(id: number): boolean {
    const pos = this.alumnos.findIndex(al => al.id === id);
    if ( pos >= 0) {
      console.log('alumno borrado id:' + id);
      this.alumnos.splice(pos, 1);
      this.notificarCambios();
      return true;
    }

    return false;
  }

}
