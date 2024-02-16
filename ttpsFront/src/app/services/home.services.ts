import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';


import { environment } from '../../environments/environments';


@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    } 
    getAll(){
        return this.http.get(`${environment.apiUrl}/usuarios/listGrupos`)
    }
    
}