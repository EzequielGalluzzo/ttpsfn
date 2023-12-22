import { Component } from '@angular/core';

import { User } from '../../models/users';
import { AccountService } from '../../services/acccount.service';

@Component({ templateUrl: 'home.html' })
export class UserHome {
    user: User | null;
    
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        
       
    }
}
