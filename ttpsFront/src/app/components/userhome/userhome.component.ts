import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';
import { AccountService } from '../../services/acccount.service';
import { Inject } from '@angular/core';

@Component({ templateUrl: 'userhome.component.html' })
export class UserHomeComponent{
    user: User | null;
    
    constructor(private accountService: AccountService, @Inject(Router) private router: Router) {
   
        this.user = this.accountService.userValue;
      
    }
    crearGrupo(){
            this.router.navigate(['/createGrupo']);
      }
    gasto(){
        this.router.navigate(['/gasto'])
    }
    logout(){

    }
}
