import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  tabla = [
    {dia:'Lunes', hora:'18-20', aula:'T-202'},
    {dia:'Miércoles', hora:'18-20', aula:'T-202'}];
  

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    console.log(this.grupoService.asignaturas);
    this.asignaturas = this.grupoService.asignaturas;
    this.profesores = this.grupoService.profesores;

    this.formulario = new FormGroup({
       claveAsignatura: new FormControl(this.asignaturas[1].clave,[Validators.required]),
       claveProfesor: new FormControl(this.profesores[1].id),
    });
    
  }

  submit(){
    const grupo = this.formulario.value;
    console.log(grupo);
  }

}
