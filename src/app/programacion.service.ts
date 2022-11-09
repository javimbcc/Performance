import { Injectable } from '@angular/core';
import { Programacion } from './data/intyerface';
import { temas } from './mock/programadores';

@Injectable({
  providedIn: 'root',
})
export class ProgramacionService {
  listaTemas: Programacion[] = [];
  detallesTema: Programacion[] = [];
  constructor() {
    this.listaTemas = temas;
  }

  getTemas(): Programacion[] {
    return this.listaTemas;
  }

  getDetalleTema(id: number): Programacion {
    const tema = this.listaTemas.find((t) => (t.tema == id))!;
    return tema;
  }

  setTema(tema: Programacion): void {
    this.listaTemas.push(tema);
  }
}
