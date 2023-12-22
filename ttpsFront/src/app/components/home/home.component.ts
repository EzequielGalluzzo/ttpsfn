import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ){ }

  login(){
    console.log('llegue')
    this.router.navigate(['/login'])
  }

  tmp(){
    this.router.navigate(['/home'])
  }

}
