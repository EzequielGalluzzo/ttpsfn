import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GrupoService } from '../../services/grupo.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grupo-update',

  templateUrl: './grupo-update.component.html',
  styleUrl: './grupo-update.component.css'
})
export class GrupoUpdateComponent implements OnInit{
    categorias: { nombre: string; icono: string; }[] = [];
    form!: FormGroup;
    loading = false;
    submitted = false;
    grupo:any
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private grupoService: GrupoService,
        
        
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            nombre: [''],
            descripcion: [''],
            categoria: ['']
        });
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.grupoService.getGrupo(id).subscribe((grupo: any) => {
              this.grupo = grupo;
              this.form.patchValue(grupo); // Usar patchValue para establecer los valores del formulario
            });
          });
        this.obtenerCategorias();
    }


    obtenerCategorias(): void {
        this.grupoService.getAllCategoria()
          .subscribe((categorias:any) => {
            this.categorias = categorias;
          });
      }

    nombre: string = 'Valor del nombre';
    descripcion: string = 'Valor de la descripción';

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;



        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        const id = this.route.snapshot.params['id'];
        this.grupoService.updateGroup(this.form.value,id)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate(['/home']);
                },
                error: error => {
                    console.log(error);
                    this.loading = false;
                }
            });
    }
    volver(){
        this.router.navigate(['/home']);
    
    }
}
@NgModule({
    declarations: [GrupoUpdateComponent],// Declarar UserHomeComponent aquí
    imports: [CommonModule,FormsModule,ReactiveFormsModule], // Puedes importar otros módulos si los necesitas
    exports: [GrupoUpdateComponent] // Si necesitas exportar el componente para usarlo en otros módulos
  })
  export class EditGastosModule{}
  
