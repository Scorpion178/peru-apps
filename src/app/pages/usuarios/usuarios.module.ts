import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';

/****** Routes ******/
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsernuevoComponent } from './usernuevo/usernuevo.component';
import { UsereditarComponent } from './usereditar/usereditar.component';

@NgModule({
  declarations: [UsuariosComponent, UsernuevoComponent, UsereditarComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
