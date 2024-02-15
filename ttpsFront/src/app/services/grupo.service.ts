import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { Grupo } from '../models/grupo';

import { environment } from '../../environments/environments';
import { User } from '../models/users';

@Injectable({ providedIn: 'root' })
export class GrupoService {
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    } 
    
    getAllCategoria(){
        return this.http.get(`${environment.apiUrl}/categorias/all`);
    }
    createGrupo(grupo: Grupo) {
        return this.http.post(`${environment.apiUrl}/grupos/createGroup`, grupo);
    }


    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/usuario/${id}`);
    }

    

    updateGroup(group: Grupo){
        return this.http.post(`${environment.apiUrl}/grupos/updateGroup`, group)
    }

    
}