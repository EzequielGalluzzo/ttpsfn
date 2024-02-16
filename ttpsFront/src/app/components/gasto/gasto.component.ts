import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GastoService } from '../../services/gasto.service';
import { first } from 'rxjs/operators';





@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent implements OnInit {
    categorias: { nombre: string; icono: string; }[] = [];

  form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private gastoService: GastoService,
        
    ) { }

    ngOnInit() {
      const fechaActual= new Date();
      

      const fechaFormateer= this.formatDate(fechaActual);
      this.form = this.formBuilder.group({
          nombre: ['', Validators.required],
          monto: ['', Validators.required],
          descripcion: ['', Validators.required],
          fecha: [fechaFormateer, Validators.required],
          categoria: ['',Validators.required],
          
      });
      this.obtenerCategorias();
  }
  obtenerCategorias(): void {
    this.gastoService.getAllCategoria()
      .subscribe((categorias:any) => {
        this.categorias = categorias;
      });
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  get f() { return this.form.controls; }

      onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.route.params.subscribe(params => {
        const id = params['id'];
        // Ahora puedes usar el ID en tu lógica de negocio, por ejemplo, para enviarlo al servicio de gastos
        this.gastoService.new(this.form.value, id)
            .pipe(first())
            .subscribe({
                next: () => {
                  this.router.navigate(['./home'], { relativeTo: this.route }); // Manejo de éxito
                },
                error: error => {
                  this.loading = false;  // Manejo de error
                }
            });
    });
      }

    volver(){
        this.router.navigate(['/home'])
    }

}
