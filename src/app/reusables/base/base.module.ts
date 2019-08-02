import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/****** Material Angular ******/
import { MyMaterialModule } from '../../reusables/material/material.module';

// Pipes
import { ImagedefaultPipe } from '../../theme/pipe/imagedefault.pipe';

// componentes
import { LoadingfullComponent } from './loadingfull/loadingfull.component';
import { HeaderComponent } from './header/header.component';
import { DialogconfirmComponent } from './dialogconfirm/dialogconfirm.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    ImagedefaultPipe,
    LoadingfullComponent,
    DialogconfirmComponent,
    HeaderComponent
  ],
  entryComponents: [
    DialogconfirmComponent
  ],
  exports: [
    ImagedefaultPipe,
    LoadingfullComponent,
    DialogconfirmComponent,
    HeaderComponent
  ]
})
export class BaseModule { }
