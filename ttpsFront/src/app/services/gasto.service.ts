import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environments';
import { gasto } from '../models/gastos';

@Injectable({ providedIn: 'root' })
export class GastoService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    new(gasto: gasto){
        return this.http.post(`${environment.apiUrl}/gastos/createGasto`, gasto);
    }

   

    
}