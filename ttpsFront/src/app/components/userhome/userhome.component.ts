import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';
import { AccountService } from '../../services/acccount.service';
import { Inject } from '@angular/core';
import { HomeService } from '../../services/home.services';

import { GrupoService } from '../../services/grupo.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './userhome.component.html'
})
export class UserHomeComponent implements OnInit {
  user: User | null;
  grupos: { nombre: string; id:number,categoria: string; descripcion: string; }[] = [];
 
  constructor(
    private accountService: AccountService,
    @Inject(Router) private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private grupoService: GrupoService
  ) {
    this.user = this.accountService.userValue;
  }

  ngOnInit() {
    this.grupo();
  }
  addUser(id:number){
    this.router.navigate(['/agregarUser', id]);
}
  crearGrupo() {
    this.router.navigate(['/createGrupo']);
  }
  verGastos(id:number){
    this.router.navigate(['/listado', id]);      
}

  gasto(id:number) {
    this.router.navigate(['/gasto',id])
  }

  logout() {
    this.accountService.logout();
  }

  grupo() {
    this.homeService.getAll().subscribe((grupos: any) => {
      this.grupos = grupos;
    });
  }
  editGroup(id:number) {
    this.router.navigate(['/editGroup', id]);
  }
}

@NgModule({
  declarations: [UserHomeComponent], // Declarar UserHomeComponent aquí
  imports: [CommonModule], // Puedes importar otros módulos si los necesitas
  exports: [UserHomeComponent] // Si necesitas exportar el componente para usarlo en otros módulos
})
export class UserHomeModule { }
