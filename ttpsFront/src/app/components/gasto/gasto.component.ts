import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GastoService } from '../../services/gasto.service';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-gasto',
  standalone: true,
  imports: [],
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent {

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
      this.form = this.formBuilder.group({
          nombre: ['', Validators.required],
          monto: ['', Validators.required],
          descripcion: ['', Validators.required],
          fecha: ['', Validators.required]
      });
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
    this.gastoService.new(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                //this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                this.router.navigate(['./home'], { relativeTo: this.route });
            },
            error: error => {
                //this.alertService.error(error);
                this.loading = false;
            }
        });
    }

    volver(){
        this.router.navigate(['/home'])
    }

}
