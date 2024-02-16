import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GrupoService } from '../../services/grupo.service';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/categoria';



@Component({
  selector: 'app-group',
  standalone: false,
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})

export class GrupoComponent implements OnInit {
    categorias: { nombre: string; icono: string; }[] = [];
    form!: FormGroup;
    loading = false;
    submitted = false;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private grupoService: GrupoService,
        
        
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            categoria: ['', Validators.required]
        });
        this.obtenerCategorias();
    }

    get f() { return this.form.controls; }
    obtenerCategorias(): void {
        this.grupoService.getAllCategoria()
          .subscribe((categorias:any) => {
            this.categorias = categorias;
          });
      }
  
    onSubmit() {
        this.submitted = true;



        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.grupoService.createGrupo(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    //this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/home']);
                },
                error: error => {
                    //this.alertService.error(error);
                    console.log(error);
                    this.loading = false;
                }
            });
    }
    volver(){
        this.router.navigate(['/home']);
    }


}



