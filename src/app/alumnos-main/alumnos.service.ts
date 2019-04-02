import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Alumno } from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  cambiaDato = new Subject<Alumno[]>();
  private lastId = 1;

  private alumnos: Alumno[] = [
    new Alumno(this.lastId++, 'Alberto', 23, 80, 'ISC', 'M'),
    new Alumno(this.lastId++, 'Laura', 23, 86, 'ISC', 'F'),
    new Alumno(this.lastId++, 'Jaime', 23, 58, 'ISC', 'M'),
  ];

  constructor() { }

  getNextId(): number {
    return this.lastId;
  }

  addAlumno(alumno: Alumno){
    alumno.id = this.lastId;
    //TODO: asegurar que no exista otro alumno con el mismo nombre
    
    this.alumnos.push(Object.assign({},alumno));
    this.lastId++;
    this.notificarCambios();
  }

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
