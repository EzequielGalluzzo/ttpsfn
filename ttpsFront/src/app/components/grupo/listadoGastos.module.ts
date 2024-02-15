import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoService } from '../../services/gasto.service';
import { gasto } from '../../models/gastos';

@Component({
    selector: 'listado-gasto',
    templateUrl: './listadoGastos.component.html',
  })

export class listadoGastosComponent{

    listaGastos: any[] = [];

    constructor(
        private gastoService: GastoService,
        
    ) { }

    

    ngOnInit(){
        this.obtenerGastos();
    }

    obtenerGastos() {
        this.gastoService.all().subscribe(
          (data: any[]) => {
            this.listaGastos = data;
          },
          error => {
            console.log(error);
          }
        );
    }

}