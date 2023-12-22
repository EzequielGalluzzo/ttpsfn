import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


import { User } from '../../models/users';
import { AccountService } from '../../services/acccount.service';

@Component({ templateUrl: 'userhome.component.html' })
export class UserHomeComponent {
    user: User | null;
    
    constructor(private accountService: AccountService, private router: Router) {
        this.user = this.accountService.userValue;
        
       
    }
    gasto(){
        this.router.navigate(['/gasto'])
    }
    logout(){

    }
}
