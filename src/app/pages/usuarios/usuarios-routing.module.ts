import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
// Components
import { UsuariosComponent } from './usuarios.component';
import { UsernuevoComponent } from './usernuevo/usernuevo.component';
import { UsereditarComponent } from './usereditar/usereditar.component';
import { UserdetalleComponent } from './userdetalle/userdetalle.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'nuevo', component: UsernuevoComponent},
  { path: 'editar/:ideditar', component: UsereditarComponent},
  { path: 'detalle/:iddetalle', component: UserdetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
