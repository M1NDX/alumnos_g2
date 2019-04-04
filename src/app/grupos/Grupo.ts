import { Horario } from './Horario';

//Grupo.ts
export class Grupo {
    constructor(
        public clave: number,
        public expProfesor: number,
        public periodo: string,
        public claveAsignatura: string,
        public horario: Horario[],
    ){}
}