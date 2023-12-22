import { Component } from '@angular/core';

import { AccountService } from './services/acccount.service';
import { User } from './models/users';

@Component({ selector: 'app-root', templateUrl: 'app.component.html',styleUrl: './app.component.css' })
export class AppComponent {
    user?: User | null;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}