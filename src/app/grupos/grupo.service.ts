import { Injectable } from '@angular/core';
import { Grupo } from './Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private grupos: Grupo[];
 
  public profesores  = [];
  public asignaturas  = [];
  public periodos = ['v2019', 'o2019', 'p2020', 'v2020'];
  public periodoSugerido = 'o2019';
  public dias = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
  public horarios = ['7-9', '9-11', '11-13', '13-15', '16-18', '18-20', '19-22'];
  public aulas = ['T104', 'T105', 'T106', 'T107', 'T108', 'T109', 'T110', 'T202'];
 
 
  constructor() {
    this.profesores.push({ id:234, nombre: 'Juan López', grado: 'Doctorado'});
    this.profesores.push({ id:124, nombre: 'Juan Pérez', grado: 'Maestría'});
    this.profesores.push({ id:35, nombre: 'Javier Martínez', grado: 'Licenciatura'});
    this.profesores.push({ id:656, nombre: 'Fernanda Jiménez', grado: 'Licenciatura'});
    this.profesores.push({ id:784, nombre: 'Gabriela López', grado: 'Doctorado'});
 
    this.asignaturas.push({ clave:'DASW', nombre: 'DESARROLLO DE APLICACIONES Y SERVICIOS WEB', dependencia: ['POO']});
    this.asignaturas.push({ clave:'POO', nombre: 'PROGRAMACION ORIENTADA A OBJETOS', dependencia: ['PE']});
    this.asignaturas.push({ clave:'AP', nombre: 'ALGORITMOS Y PROGRAMACIÓN', dependencia: []});
    this.asignaturas.push({ clave:'PE', nombre: 'PROGRAMACIÓN ESTRUCTURADA', dependencia: ['PE']});
    this.asignaturas.push({ clave:'IRC', nombre: 'INTRODUCCION A REDES DE COMPUTADORAS', dependencia: []});
    this.asignaturas.push({ clave:'RC', nombre: 'REDES DE COMPUTADORAS', dependencia: ['IRC']});
    this.asignaturas.push({ clave:'CN', nombre: 'COMPUTO EN LA NUBE', dependencia: ['DASW','RC']});
   }
}
