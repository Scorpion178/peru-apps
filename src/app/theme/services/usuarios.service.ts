import { Injectable } from '@angular/core';
import { HttpClienteService } from './api/http-cliente.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = environment.apiserver;

  constructor( private http: HttpClienteService ) { }

  getUsuarios(page?: number): Observable<any> {
      // https://reqres.in/api/users
      let filt: string = '';
      if (page) {
          filt = (filt != '') ? filt + '&page=' + page : '?page=' + page;
      }

      let ruta: string = `${this.url}/api/users${filt}`;
      return this.http.get(ruta);
  }
  getUsuario(id: string) {
    // https://reqres.in/api/users
      let ruta: string = `${this.url}/api/users/${id}`;
      return this.http.get(ruta);
  }

  setUsuarios(obj: any): Observable<any> {
      // https://reqres.in/api/users
      let query: string = `${this.url}/api/users`;

      // const formData = new FormData();

      let data = JSON.stringify({
          codigo: obj.codigo,
          nombres: obj.nombres,
          apellidos: obj.apellidos,
          email: obj.email,
          password: obj.password,
          url_foto: obj.url_foto,
          estado: obj.estado,
          id_rol: obj.id_rol
      });
      return this.http.post(query, data);
  }

  editUsuarios(obj: any, id: any): Observable<any> {
      // https://reqres.in/api/users/1
      let query: string = `${this.url}/api/users/${id}`;

      let data = JSON.stringify({
          codigo: obj.codigo,
          nombres: obj.nombres,
          apellidos: obj.apellidos,
          email: obj.email,
          password: obj.password,
          url_foto: obj.url_foto,
          estado: obj.estado,
          id_rol: obj.id_rol
      });
      return this.http.put(query, data);
  }

  deleteUsuario(id) {
      // https://reqres.in/api/users/1
      let ruta: string = `${this.url}/api/users/${id}`;
      return this.http.delete(ruta);
  }

}
