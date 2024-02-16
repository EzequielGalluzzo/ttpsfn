import { Component, NgModule,Inject, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-gastos',
  templateUrl: './list-gastos.component.html',
  styleUrl: './list-gastos.component.css'
})
export class ListGastosComponent implements OnInit {
  gastos: { id: number,fecha: string; descripcion: string; monto:Float64Array }[] = [];
  constructor(

    @Inject(Router) private router: Router,
    private route: ActivatedRoute,
    private grupoService: GrupoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Ahora puedes usar el ID en tu lógica de negocio, por ejemplo, para enviarlo al servicio de gastos
      this.grupoService.getGastos(id).subscribe((gastos:any) => {
          this.gastos = gastos;
        });        });
  
  }

  volver() {
    this.router.navigate(['/home'])
  }
 editarGasto(id:number){
  this.router.navigate(['editGasto',id])
 }
  
}
@NgModule({
  declarations: [ListGastosComponent], // Declarar UserHomeComponent aquí
  imports: [CommonModule], // Puedes importar otros módulos si los necesitas
  exports: [ListGastosComponent] // Si necesitas exportar el componente para usarlo en otros módulos
})
export class ListGastosModule{}


