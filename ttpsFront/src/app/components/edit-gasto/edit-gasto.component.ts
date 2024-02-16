import { Component, NgModule, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GastoService } from '../../services/gasto.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-gasto',
  templateUrl: './edit-gasto.component.html',
  styleUrls: ['./edit-gasto.component.css']
})
export class EditGastoComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  gasto: any;
  categorias: { nombre: string; icono: string; }[] = [];

  constructor(
    @Inject(Router) private router: Router,
    private route: ActivatedRoute,
    private gastoService: GastoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [''],
      monto: [''],
      descripcion: [''],
      fecha: [''],
      categoria: [''],
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.gastoService.getGastos(id).subscribe((gasto: any) => {
        this.gasto = gasto;
        this.form.patchValue(gasto); // Usar patchValue para establecer los valores del formulario
      });
    });

    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.gastoService.getAllCategoria()
      .subscribe((categorias: any) => {
        this.categorias = categorias;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    this.gastoService.updateGasto(this.form.value, id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['./home'], { relativeTo: this.route });
        },
        error: error => {
          this.loading = false;
        }
      });
  }

  volver() {
    this.router.navigate(['/home'])
  }
}

@NgModule({
  declarations: [EditGastoComponent], // Declarar UserHomeComponent aquí
  imports: [CommonModule,FormsModule,ReactiveFormsModule], // Puedes importar otros módulos si los necesitas
  exports: [EditGastoComponent] // Si necesitas exportar el componente para usarlo en otros módulos
})
export class EditGastosModule{}


