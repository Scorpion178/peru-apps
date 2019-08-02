import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DialogconfirmComponent } from '../../../reusables/base/dialogconfirm/dialogconfirm.component';
import { UsuariosService } from '../../../theme/services/usuarios.service';
import { MatDialog, MatSnackBar } from '@angular/material';

import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


@Component({
  selector: 'app-usereditar',
  templateUrl: './usereditar.component.html',
  styleUrls: ['./usereditar.component.scss']
})
export class UsereditarComponent implements OnInit {

  idUser: string = '';
  miUser = {
    nombre: '',
    apellidopat: '',
    apellidomat: '',
    email: '',
    fchnac: '',
    fchtermino: ''
  };

  addEditUserForm: FormGroup;
  // Interfaz
  activeloadingfull: boolean = false;

  // Maxima fecha de cumpleaños
  maxDate = new Date();

  constructor(
    private route: ActivatedRoute,
    public builder: FormBuilder,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.activeloadingfull = true;
    this.route.params
      .subscribe((param: any) => {
        this.idUser = param.ideditar;
        this.getInitUser();
      });

    this.addEditUserForm = this.builder.group({
      nombre: ['', Validators.required],
      apellidopat: ['', Validators.required],
      apellidomat: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      fchnac: ['', Validators.required],
      fchtermino: ''
    });
  }

  saveUsuario(miForm: NgForm) {
    if (miForm.invalid) {
      this.snackBar.open('El formulario no es valido, por favor llenar correctamente', 'error', {
        duration: 2000,
      });
    } else {
      if (miForm.value) {
        this.activeloadingfull = true;

        let formvalue = miForm.value;
        let ObjUsuario = {
          nombre: formvalue.nombre,
          apellidopat: formvalue.apellidopat,
          apellidomat: formvalue.apellidomat,
          email: formvalue.email,
          fchnac: formvalue.fchnac.toDate(),
          fchtermino: new Date()
        };

        this.activeloadingfull = false;
        
        this.setUser(ObjUsuario);
      }
    }
  }

  setUser(obj) {
    let subsinForm: Subscription = this._usuariosService.editUsuarios(obj, this.idUser)
      .subscribe((res: any) => {
        this.activeloadingfull = false;

        let dialogConfirmRef = this.dialog.open(DialogconfirmComponent, {
          width: '250px',
          data: { message: 'Se edito el nuevo usuario correctamente.' }
        });
        dialogConfirmRef.afterClosed().subscribe(confirm => {
          if (confirm) {

            this.miUser = {
              nombre: obj.nombre,
              apellidopat: obj.apellidopat,
              apellidomat: obj.apellidomat,
              email: obj.email,
              fchnac: obj.fchnac,
              fchtermino: obj.fchtermino
            };
          }
        });

        subsinForm.unsubscribe();
      }, (err: HttpErrorResponse) => {
        this.activeloadingfull = false;
        if (err.error instanceof Error) {
          console.log('Client-side error occured: ', err);
        } else {
          console.log('Server-side error occured: ', err);
        }
      });
  }

  resetForm(miForm: NgForm) {
    miForm.resetForm(this.miUser);
  }

  /******************** PRIMERA CARGA ********************/
  getInitUser() {
    this._usuariosService.getUsuario(this.idUser).pipe(take(1))
      .subscribe((res: any) => {
        if (res) {
          this.miUser = {
            nombre: (res.data.first_name)? res.data.first_name:'',
            apellidopat: (res.data.last_name)? res.data.last_name:'',
            apellidomat: (res.data.apellidomat)? res.data.apellidomat:'',
            email: (res.data.email)? res.data.email:'',
            fchnac: (res.data.fchnac)? res.data.fchnac:'',
            fchtermino: (res.data.fchtermino)? res.data.fchtermino:'',
          };

          this.initForm();
        }
      }, (err: HttpErrorResponse) => {
        this.activeloadingfull = false;
        if (err.error instanceof Error) {
          console.log('Client-side error occured: ', err);
        } else {
          console.log('Server-side error occured: ', err);
        }
      });
  }

  initForm() {
    this.addEditUserForm.setValue(this.miUser);
    this.activeloadingfull = false;
  }
  /******************** /PRIMERA CARGA ********************/
}
