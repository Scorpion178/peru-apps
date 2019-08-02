import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogconfirmComponent } from '../../../reusables/base/dialogconfirm/dialogconfirm.component';
import { UsuariosService } from '../../../theme/services/usuarios.service';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-usernuevo',
  templateUrl: './usernuevo.component.html',
  styleUrls: ['./usernuevo.component.scss']
})
export class UsernuevoComponent implements OnInit {

  addEditUserForm: FormGroup;

  // Interfaz
  activeloadingfull: boolean = false;

  // Maxima fecha de cumpleaños
  maxDate = new Date();

  constructor(
    public builder: FormBuilder,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.addEditUserForm = this.builder.group({
      nombre: ['', Validators.required],
      apellidopat: ['', Validators.required],
      apellidomat: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      fchnac: ['', Validators.required],
      fchingreso: ''
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
          fchingreso: new Date()
        };
        
        this.setUser(ObjUsuario, miForm);
      }
    }
  }

  setUser(obj, miForm: NgForm) {
    let subsinForm: Subscription = this._usuariosService.setUsuarios(obj)
      .subscribe((res: any) => {

        this.activeloadingfull = false;

        let dialogConfirmRef = this.dialog.open(DialogconfirmComponent, {
          width: '250px',
          data: { message: 'Se agrego el nuevo usuario correctamente.' }
        });
        dialogConfirmRef.afterClosed().subscribe(confirm => {
          if (confirm) {
            this.resetForm(miForm);
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
    miForm.resetForm({
      nombre: '',
      apellidopat: '',
      apellidomat: '',
      email: '',
      fchnac: '',
      fchingreso: ''
    });
  }

}
