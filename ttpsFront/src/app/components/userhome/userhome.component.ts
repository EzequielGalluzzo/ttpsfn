import { Component } from '@angular/core';

import { User } from '../../models/users';
import { AccountService } from '../../services/acccount.service';

@Component({ templateUrl: 'userhome.component.html' })
export class UserHomeComponent {
    user: User | null;
    
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        
       
    }
}
