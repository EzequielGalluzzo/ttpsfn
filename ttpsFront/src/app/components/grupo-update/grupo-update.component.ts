import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GrupoService } from '../../services/grupo.service';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-grupo-update',
  standalone: true,
  imports: [],
  templateUrl: './grupo-update.component.html',
  styleUrl: './grupo-update.component.css'
})
export class GrupoUpdateComponent implements OnInit{
  categorias: Observable<Categoria[]> | undefined;
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
        this.grupoService.createGrupo(this.form.value)
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
}
