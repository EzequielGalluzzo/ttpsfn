import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.gurads';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/userhome/userhome.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { ListGastosComponent } from './components/list-gastos/list-gastos.component';
import { EditGastoComponent } from './components/edit-gasto/edit-gasto.component';
import {AgregarUserComponent} from './components/agregar-user/agregar-user.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: UserHomeComponent,canActivate: [AuthGuard] },
    {path: 'createGrupo', component: GrupoComponent,canActivate: [AuthGuard] },
    {path:'gasto/:id', component: GastoComponent,canActivate: [AuthGuard] },
    {path:'listado/:id', component: ListGastosComponent,canActivate: [AuthGuard] },
    {path: 'editGasto/:id', component: EditGastoComponent,canActivate: [AuthGuard] },
    {path: 'agregarUser/:id', component: AgregarUserComponent,canActivate: [AuthGuard]}    



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }