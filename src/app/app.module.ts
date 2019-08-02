import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/****** Modules ******/
// import { InterceptorModule } from './theme/services/api/interceptor.module';

/****** Material Angular ******/


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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClienteService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
