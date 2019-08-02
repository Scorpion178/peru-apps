import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuariosService } from '../../../theme/services/usuarios.service';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-userdetalle',
  templateUrl: './userdetalle.component.html',
  styleUrls: ['./userdetalle.component.scss']
})
export class UserdetalleComponent implements OnInit {

  idUser: string = '';
  miUser = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  };
  activeloadingfull: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _usuariosService: UsuariosService
  ) { }

  
  ngOnInit() {
    this.activeloadingfull = true;
    this.route.params
      .subscribe((param: any) => {
        this.idUser = param.iddetalle;
        this.getUser();
      });
  }

  getUser(){
    this._usuariosService.getUsuario(this.idUser).pipe(take(1))
      .subscribe((res: any) => {
        if (res) {
          console.log(res);
          this.miUser = {
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
            avatar: res.data.avatar
          };
        }
        this.activeloadingfull = false;
      }, (err: HttpErrorResponse) => {
        this.activeloadingfull = false;
        if (err.error instanceof Error) {
          console.log('Client-side error occured: ', err);
        } else {
          console.log('Server-side error occured: ', err);
        }
      });
  }

}
