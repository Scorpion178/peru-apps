import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Guards
// Components

const routes: Routes = [
  { path: 'usuarios',
    loadChildren: './pages/usuarios/usuarios.module#UsuariosModule',
  },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
