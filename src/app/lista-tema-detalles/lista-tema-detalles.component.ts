import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Programacion } from '../data/intyerface';
import { ProgramacionService } from '../programacion.service';

@Component({
  selector: 'app-lista-tema-detalles',
  templateUrl: './lista-tema-detalles.component.html',
  styleUrls: ['./lista-tema-detalles.component.css'],
})
export class ListaTemaDetallesComponent implements OnInit {
  numTema: number = 1;
  temaActual?: Programacion;
  constructor(
    private temaService: ProgramacionService,
    private ruta: ActivatedRoute,
    private location: Location
  ) {
    this.numTema = Number(this.ruta.snapshot.paramMap.get('num'));
  }

  ngOnInit(): void {
    this.temaActual = this.temaService.getDetalleTema(this.numTema);
  }

  back(): void {
    this.location.back();
  }
}
