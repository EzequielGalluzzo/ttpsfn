import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../environments/environments';
import { gasto } from '../models/gastos';

@Injectable({ providedIn: 'root' })
export class GastoService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    new(gasto: gasto,id:number){
        return this.http.post(`${environment.apiUrl}/gastos/createGasto/${id}`, gasto);
    }
    getAllCategoria(){
        return this.http.get(`${environment.apiUrl}/gastoCategoria/all`);
    }

    updateGasto(gasto:gasto,id:number){
        return this.http.put(`${environment.apiUrl}/gastos/update/${id}`,gasto);
    }
    getGastos(id:number){
        return this.http.get(`${environment.apiUrl}/gastos/${id}`);
    }
}