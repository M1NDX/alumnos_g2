import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grupo-edit',
  templateUrl: './grupo-edit.component.html',
  styleUrls: ['./grupo-edit.component.css']
})

//GRUPO-EDIT.COMPONENT.TS
export class GrupoEditComponent implements OnInit {
  
  formulario: FormGroup;

  //listados para los selects
  asignaturas = [];
  profesores = [];

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    console.log(this.grupoService.asignaturas);
    this.asignaturas = this.grupoService.asignaturas;
    this.profesores = this.grupoService.profesores;
    
    this.formulario = new FormGroup({
       claveAsignatura: new FormControl(''),
       claveProfesor: new FormControl(''),
    });

  }

}
