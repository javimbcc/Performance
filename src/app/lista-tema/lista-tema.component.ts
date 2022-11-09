import { Component, OnInit } from '@angular/core';
import { Programacion } from '../data/intyerface';
import { ProgramacionService } from '../programacion.service';
import { temas } from '../mock/programadores';
@Component({
  selector: 'app-lista-tema',
  templateUrl: './lista-tema.component.html',
  styleUrls: ['./lista-tema.component.css']
})
export class ListaTemaComponent implements OnInit {
  temas: Programacion[] = [];
  constructor(private pService: ProgramacionService) { }

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas(): void {
    this.temas = [];
    this.temas = this.pService.getTemas();
  }

}
