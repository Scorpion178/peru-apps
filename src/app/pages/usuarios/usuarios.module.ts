import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/****** Modules ******/
import { BaseModule } from '../../reusables/base/base.module';

/****** Routes ******/
import { UsuariosRoutingModule } from './usuarios-routing.module';

/****** Material Angular ******/
import { MyMaterialModule } from '../../reusables/material/material.module';

/****** Componentes ******/
import { UsernuevoComponent } from './usernuevo/usernuevo.component';
import { UsereditarComponent } from './usereditar/usereditar.component';
import { UserdetalleComponent } from './userdetalle/userdetalle.component';

@NgModule({
  declarations: [UsuariosComponent, UsernuevoComponent, UsereditarComponent, UserdetalleComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    BaseModule
  ]
})
export class UsuariosModule { }
