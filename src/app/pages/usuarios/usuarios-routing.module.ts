import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Guards
// Components
import { UsuariosComponent } from './usuarios.component';
import { UsernuevoComponent } from './usernuevo/usernuevo.component';
import { UsereditarComponent } from './usereditar/usereditar.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'nuevo', component: UsernuevoComponent},
  { path: 'editar/:ideditar', component: UsereditarComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
