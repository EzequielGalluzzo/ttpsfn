
import { Component, NgModule,Inject, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-users',

  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  


  usuarios: {name: string; lastname: string; email:string }[] = [];
  hayUsers:boolean = false;

  constructor(

    @Inject(Router) private router: Router,
    private route: ActivatedRoute,
    private grupoService: GrupoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Ahora puedes usar el ID en tu lógica de negocio, por ejemplo, para enviarlo al servicio de gastos
      this.grupoService.getUsers(id).subscribe((usuarios:any) => {
          this.usuarios= usuarios;
          if(this.usuarios.length > 0) {
            this.hayUsers = true;
          }
        });        });
      
  
  }

  volver() {
    this.router.navigate(['/home'])
  }
  
}
@NgModule({
  declarations: [ListUsersComponent], // Declarar UserHomeComponent aquí
  imports: [CommonModule], // Puedes importar otros módulos si los necesitas
  exports: [ListUsersComponent] // Si necesitas exportar el componente para usarlo en otros módulos
})

export class ListUsersComponentModule{}


