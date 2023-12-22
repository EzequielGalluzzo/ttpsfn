import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/userhome/userhome.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { GastoComponent } from './components/gasto/gasto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: UserHomeComponent},
    {path: 'createGrupo', component: GrupoComponent},
    {path:'gasto', component: GastoComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }