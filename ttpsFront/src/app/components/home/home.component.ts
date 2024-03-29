import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){ }

  login(){
    console.log('llegue')
    this.router.navigate(['/login'])
  }

  registro(){
    this.router.navigate(['/register'])
  }

}
