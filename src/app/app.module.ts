import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/****** Modules ******/
// import { InterceptorModule } from './theme/services/api/interceptor.module';

/****** ng-Bootstrap ******/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/****** Routes ******/
import { AppRoutingModule } from './app-routing.module';

/****** Pipes ******/

/****** Directives ******/

/****** Servicios ******/
// Config
import { HttpClienteService } from './theme/services/api/http-cliente.service';
// Guard
// Normales
import { UsuariosService } from './theme/services/usuarios.service';

/****** Enviroment ******/
import { environment } from '../environments/environment';

/****** Componentes ******/
import { AppComponent } from './app.component';
import { ImagedefaultPipe } from './theme/pipe/imagedefault.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ImagedefaultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    HttpClienteService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
