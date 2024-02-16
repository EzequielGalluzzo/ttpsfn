import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GrupoService } from '../../services/grupo.service';
import { first } from 'rxjs';
import { User } from '../../models/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrl: './agregar-user.component.css'
})
export class AgregarUserComponent {
    
    usuarios: { name: string; email: string; }[] = [];
    
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
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
        this.obtenerUsuarios();
    }

    get f() { return this.form.controls; }

    seleccionarUsuario(event:any): void {
        const email = event.target.value;
        const usuarioSeleccionado = this.usuarios.find(usuario => usuario.email === email);
        if (usuarioSeleccionado) {
            this.form.patchValue({
                name: usuarioSeleccionado.name,
                email: usuarioSeleccionado.email
            });
        }
    }
    obtenerUsuarios(): void {
        this.grupoService.getUsuarios()
          .subscribe((usuarios:any) => {
            this.usuarios=usuarios;
          });
      }
    onSubmit() {
        this.submitted = true;



        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.route.params.subscribe(params => {
            const id = params['id'];
            const user: User = {
                name: this.form.value.nombre,
                email: this.form.value.email
            }
        this.grupoService.agregarUsuario(id,user)
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
        });
    }
    volver(){
        this.router.navigate(['/home']);
    
    }

 
}

@NgModule({
    declarations: [AgregarUserComponent], // Declarar UserHomeComponent aquí
    imports: [CommonModule,ReactiveFormsModule], // Puedes importar otros módulos si los necesitas
    exports: [AgregarUserComponent] // Si necesitas exportar el componente para usarlo en otros módulos
  })
  export class UserHomeModule { }
