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

    //update(id: string, params: any) {
      //  return this.http.put(`${environment.apiUrl}/usuario/update/${id}`, params)
        //    .pipe(map(x => {
                // update stored user if the logged in user updated their own record
          //      if (id == this.userValue?.id) {
                    // update local storage
            //        const user = { ...this.userValue, ...params };
              //      localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                //    this.userSubject.next(user);
                //}
                //return x;
            //}));
    //}

    
}